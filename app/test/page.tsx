"use client";
import React, { useState, useEffect, useCallback, useRef, JSX } from "react";
import { io, Socket } from "socket.io-client";

// --- Type Definitions ---

interface Seat {
  id: string;
  status: "available" | "selected" | "booked";
  user: string | null;
}

// Updated Layout type to include new fields from JSON
interface Layout {
  rows: number;
  seatsPerRow: number;
  aisleAfter: number | null; // Column index AFTER which the aisle appears (0-based)
  doorPosition?: {
    // Optional door position
    row: number; // 0-based row index
    col: number; // 0-based column index (relative to seat positions, excluding aisle)
  };
}

// Updated BusData type
interface BusData {
  busId: string; // Added busId here for context
  seats: Record<string, Seat>;
  layout: Layout;
  cabin: number; // Keep for potential future use
  door: boolean; // Keep for potential future use
  backSeats: number; // Number of seats considered 'back seats'
  cabinSeats: number;
}

interface BusInfo {
  id: string;
  name: string;
}

interface InitialDataPayload {
  buses: BusInfo[];
}

// Use the full BusData interface for the payload
interface BusDataPayload extends BusData {}

interface SeatUpdatePayload {
  busId: string;
  seatId: string;
  status: "available" | "selected" | "booked";
  user: string | null;
}

interface SelectionSuccessPayload {
  seatId: string;
}

interface DeselectionSuccessPayload {
  seatId: string;
}

interface SelectionErrorPayload {
  seatId: string;
  message: string;
}

interface BookingResultPayload {
  success: boolean;
  message: string;
  bookedSeats?: string[]; // Seats successfully booked in this attempt
  failedSeats?: string[]; // Seats that failed in this attempt
  booked?: string[]; // Alias for bookedSeats for compatibility
}

interface ServerErrorPayload {
  message: string;
}

// --- Component ---

const SERVER_URL = "http://localhost:4000"; // Ensure your server URL is correct

const BusBooking: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [buses, setBuses] = useState<BusInfo[]>([]);
  const [selectedBusId, setSelectedBusId] = useState<string>("");
  // BusData now holds the full structure including layout details
  const [busData, setBusData] = useState<BusData | null>(null);
  const [mySelections, setMySelections] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const usernameRef = useRef<string>(username);
  const selectedBusIdRef = useRef<string>(selectedBusId);

  useEffect(() => {
    usernameRef.current = username;
  }, [username]);

  useEffect(() => {
    selectedBusIdRef.current = selectedBusId;
    // Clear old data when bus changes
    if (selectedBusId === "") {
      setBusData(null);
      setMySelections([]);
    }
  }, [selectedBusId]);

  // --- Socket Connection and Event Handlers ---
  useEffect(() => {
    // Prevent connection attempt during server-side rendering or if already connected
    if (typeof window === "undefined" || socket) return;

    console.log("Attempting to connect to socket server...");
    const newSocket = io(SERVER_URL, {
      reconnectionAttempts: 5,
      reconnectionDelay: 3000,
      transports: ["websocket"], // Often helps with connection issues
    });
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log(`Connected to server with ID: ${newSocket.id}`);
      setIsConnected(true);
      setMessage("Connected to the booking server.");
      setError("");
      // Request initial list of buses upon connection
      newSocket.emit("getInitialData");
      // If a bus was previously selected (e.g., reconnect), re-request its data
      if (selectedBusIdRef.current) {
        console.log(
          `Re-requesting data for bus: ${selectedBusIdRef.current} after connection.`,
        );
        newSocket.emit("getBusData", selectedBusIdRef.current);
      }
    });

    newSocket.on("disconnect", (reason) => {
      console.log(`Disconnected from server: ${reason}`);
      setIsConnected(false);
      setMySelections([]); // Clear selections on disconnect
      // Don't clear busData immediately, maybe connection is temporary
      setError("Connection lost. Attempting to reconnect...");
      setMessage("");
    });

    newSocket.on("connect_error", (err) => {
      console.error("Connection Error:", err);
      setIsConnected(false);
      const socketId = newSocket?.id ? ` (Socket ID: ${newSocket.id})` : "";
      setError(
        `Connection failed${socketId}: ${err.message}. Is the server running at ${SERVER_URL}?`,
      );
      setMessage("");
      setBusData(null); // Clear data on connection failure
      setBuses([]); // Clear bus list
    });

    // Listener for the list of available buses
    newSocket.on("initialData", (data: InitialDataPayload) => {
      console.log("Received initial data (bus list):", data);
      setBuses(data.buses || []);
      if (data.buses?.length > 0 && !selectedBusIdRef.current) {
        setMessage("Please select a bus.");
      } else if (data.buses?.length === 0) {
        setMessage("No buses available from the server.");
      }
    });

    // Listener for specific bus data (layout and seats)
    newSocket.on("busData", (data: BusDataPayload) => {
      console.log(`Received data for bus ${data.busId}:`, data);
      // Only update if the data matches the currently selected bus
      if (data.busId === selectedBusIdRef.current) {
        // Validate received data structure
        if (data.seats && data.layout) {
          setBusData(data); // Store the complete BusData object
          setMySelections([]); // Clear selections when new bus data loads
          setMessage(`Displaying seats for bus ${data.busId}.`);
          setError("");
        } else {
          console.error("Received incomplete bus data for", data.busId);
          setError(`Incomplete data received for bus ${data.busId}.`);
          setBusData(null);
        }
      } else {
        console.log(
          `Received busData for ${data.busId}, but currently selected is ${selectedBusIdRef.current}. Ignoring.`,
        );
      }
    });

    // Listener for real-time seat updates
    newSocket.on("seatUpdate", (data: SeatUpdatePayload) => {
      console.log("Seat update received:", data);
      // Ignore if update is for a different bus or if busData isn't loaded
      if (!busData || data.busId !== selectedBusIdRef.current) {
        console.log(
          `Seat update for ${data.busId} ignored (current: ${
            selectedBusIdRef.current
          }, data loaded: ${!!busData})`,
        );
        return;
      }

      setBusData((prevBusData) => {
        if (!prevBusData) return null; // Should not happen due to check above, but safety first
        const updatedSeats = { ...prevBusData.seats };
        if (updatedSeats[data.seatId]) {
          updatedSeats[data.seatId] = {
            ...updatedSeats[data.seatId],
            status: data.status,
            user: data.user,
          };
          console.log(
            `Seat ${data.seatId} updated to status ${data.status} by ${
              data.user || "system"
            }`,
          );
        } else {
          console.warn(
            `Received update for unknown seat: ${data.seatId} on bus ${data.busId}`,
          );
          // Don't modify state if seatId is unknown
          return prevBusData;
        }
        return { ...prevBusData, seats: updatedSeats };
      });

      // Update 'mySelections' if the updated seat was one of mine
      setMySelections((prevMySelections) => {
        const currentUsername = usernameRef.current;
        if (prevMySelections.includes(data.seatId)) {
          // If my selected seat becomes available or booked, remove it
          if (data.status === "available" || data.status === "booked") {
            console.log(
              `Seat ${data.seatId} removed from my selections due to status change to ${data.status}`,
            );
            return prevMySelections.filter((id) => id !== data.seatId);
          }
          // If my selected seat is now selected by someone else (edge case, shouldn't happen with proper server logic)
          if (data.status === "selected" && data.user !== currentUsername) {
            console.log(
              `Seat ${data.seatId} removed from my selections as it's now selected by ${data.user}`,
            );
            return prevMySelections.filter((id) => id !== data.seatId);
          }
        }
        return prevMySelections; // No change needed
      });
    });

    // --- Selection/Deselection/Booking Results ---
    newSocket.on("selectionSuccess", ({ seatId }: SelectionSuccessPayload) => {
      console.log(`Successfully selected seat ${seatId}`);
      // Update local state immediately for responsiveness
      setBusData((prev) =>
        prev
          ? {
              ...prev,
              seats: {
                ...prev.seats,
                [seatId]: {
                  ...prev.seats[seatId],
                  status: "selected",
                  user: usernameRef.current,
                },
              },
            }
          : null,
      );
      setMySelections((prev) => [...new Set([...prev, seatId])]); // Ensure uniqueness
      setMessage(`Seat ${seatId} selected.`);
      setError("");
    });

    newSocket.on(
      "deselectionSuccess",
      ({ seatId }: DeselectionSuccessPayload) => {
        console.log(`Successfully deselected seat ${seatId}`);
        // Update local state immediately
        setBusData((prev) =>
          prev
            ? {
                ...prev,
                seats: {
                  ...prev.seats,
                  [seatId]: {
                    ...prev.seats[seatId],
                    status: "available",
                    user: null,
                  },
                },
              }
            : null,
        );
        setMySelections((prev) => prev.filter((id) => id !== seatId));
        setMessage(`Seat ${seatId} deselected.`);
        setError("");
      },
    );

    newSocket.on(
      "selectionError",
      ({ seatId, message: errMsg }: SelectionErrorPayload) => {
        console.error(`Error selecting/deselecting seat ${seatId}: ${errMsg}`);
        // Optionally revert local state if needed, though seatUpdate should correct it
        setError(`Seat ${seatId}: ${errMsg}`);
        setMessage("");
        // Ensure seat is removed from selections if the error implies it's not selectable by user
        setMySelections((prev) => prev.filter((id) => id !== seatId));
      },
    );

    newSocket.on("bookingResult", (result: BookingResultPayload) => {
      console.log("Booking result:", result);
      if (result.success) {
        setMessage(result.message);
        setError("");
        // Clear selections on full success
        setMySelections([]);
        // The seatUpdate event should handle marking seats as booked
      } else {
        setError(result.message);
        setMessage("");
        // Handle partial success: remove only successfully booked seats from selection
        const successfullyBooked = result.bookedSeats || result.booked || [];
        if (successfullyBooked.length > 0) {
          console.log(
            "Partial booking success. Removing successfully booked seats:",
            successfullyBooked,
          );
          setMySelections((prev) =>
            prev.filter((id) => !successfullyBooked.includes(id)),
          );
        }
        // The seatUpdate event should handle marking seats as booked for successful ones
        // Failed seats remain in 'selected' state (or revert based on server logic/seatUpdate)
        if (result.failedSeats && result.failedSeats.length > 0) {
          console.log("Seats that failed booking:", result.failedSeats);
          // Optionally add specific message about failed seats
          setError(
            (prev) => `${prev} Failed seats: ${result.failedSeats?.join(", ")}`,
          );
        }
      }
    });

    // General error handler
    newSocket.on("error", (errorData: ServerErrorPayload | any) => {
      const errorMsg =
        typeof errorData === "object" && errorData?.message
          ? errorData.message
          : String(errorData);
      console.error("Server error:", errorMsg);
      setError(`Server error: ${errorMsg}`);
      setMessage("");
    });

    // Cleanup on component unmount
    return () => {
      console.log("Disconnecting socket...");
      newSocket.disconnect();
      setIsConnected(false);
      setSocket(null);
    };
    // socket dependency removed to prevent re-running this effect when socket state changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- Request Bus Data Effect ---
  useEffect(() => {
    if (socket && isConnected && selectedBusId) {
      console.log(`Requesting data for bus: ${selectedBusId}`);
      setBusData(null); // Clear previous data
      setMySelections([]); // Clear selections
      setMessage("Loading bus data...");
      setError("");
      socket.emit("getBusData", selectedBusId);
    } else if (!selectedBusId) {
      // Clear data if no bus is selected
      setBusData(null);
      setMySelections([]);
      if (isConnected && buses.length > 0) {
        setMessage("Select a bus to see details.");
      }
      setError("");
    }
  }, [socket, isConnected, selectedBusId, buses.length]); // Add buses.length dependency

  // --- Event Handlers ---

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    if (newUsername.trim()) setError(""); // Clear error when user starts typing name
  };

  const handleBusSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newBusId = event.target.value;
    console.log(`Bus selected: ${newBusId}`);
    setSelectedBusId(newBusId);
    // Data fetching is handled by the useEffect watching selectedBusId
  };

  const handleSeatClick = useCallback(
    (seatId: string) => {
      if (!socket || !isConnected) {
        setError("Not connected to server.");
        return;
      }
      if (!usernameRef.current.trim()) {
        setError("Please enter your name first.");
        return;
      }
      if (!busData || !busData.seats || !busData.seats[seatId]) {
        setError("Seat data not available or invalid seat clicked.");
        console.warn(
          "Seat click ignored, busData or seat missing",
          seatId,
          busData,
        );
        return;
      }

      const seat = busData.seats[seatId];
      const currentUsername = usernameRef.current;

      console.log(
        `Seat ${seatId} clicked. Status: ${seat.status}, User: ${
          seat.user || "none"
        }, MySelections: ${mySelections.join(
          ", ",
        )}, Clicked By: ${currentUsername}`,
      );
      setMessage(""); // Clear previous messages
      setError(""); // Clear previous errors

      switch (seat.status) {
        case "available":
          console.log(
            `Attempting to select seat ${seatId} by ${currentUsername}`,
          );
          setMessage(`Selecting ${seatId}...`);
          socket.emit("selectSeat", {
            busId: selectedBusId,
            seatId,
            username: currentUsername,
            // Include other details if needed by server for selection, e.g., email
            // email: email,
          });
          break;
        case "selected":
          if (mySelections.includes(seatId) && seat.user === currentUsername) {
            console.log(
              `Attempting to deselect seat ${seatId} by ${currentUsername}`,
            );
            setMessage(`Deselecting ${seatId}...`);
            socket.emit("deselectSeat", {
              busId: selectedBusId,
              seatId,
              username: currentUsername,
            });
          } else {
            // Seat is selected, but either not by me or the user info doesn't match
            console.log(
              `Seat ${seatId} is selected by someone else (${
                seat.user || "another user"
              }).`,
            );
            setError(
              `Seat ${seatId} is already selected by ${
                seat.user || "another user"
              }.`,
            );
          }
          break;
        case "booked":
          console.log(`Seat ${seatId} is already booked.`);
          setError(
            `Seat ${seatId} is already booked${
              seat.user ? ` by ${seat.user}` : ""
            }.`,
          );
          break;
        default:
          console.warn(`Seat ${seatId} has unknown status: ${seat.status}`);
          setError(`Seat ${seatId} has an unexpected status.`);
      }
    },
    [
      socket,
      isConnected,
      busData,
      selectedBusId,
      mySelections,
      setMessage,
      setError,
      // email // Add if needed by selectSeat event
    ],
  );

  const handleBookSeats = useCallback(() => {
    if (!socket || !isConnected) return setError("Not connected to server.");
    if (!username.trim()) return setError("Please enter your name first.");
    // Basic email validation (optional but recommended)
    if (!email.includes("@"))
      return setError("Please enter a valid email address.");
    if (mySelections.length === 0)
      return setError("No seats selected to book.");
    if (!selectedBusId) return setError("No bus selected.");

    console.log(
      `Attempting to book seats: ${mySelections.join(
        ", ",
      )} for bus ${selectedBusId} by ${username}`,
    );
    setMessage("Booking selected seats...");
    setError("");
    // Emit only the necessary data for booking
    // Server should use the username associated with the selections
    socket.emit("bookSeats", {
      busId: selectedBusId,
      username, // Send username for confirmation/logging on server
      email, // Send contact details
      phone,
      location,
      notes,
      // No need to send seatIds here if server uses user's current selections
    });
  }, [
    socket,
    isConnected,
    selectedBusId,
    mySelections,
    username,
    email,
    phone,
    location,
    notes,
    setMessage,
    setError,
  ]);

  // --- Seat Rendering Logic ---
  const renderSeats = useCallback(
    () => {
      // 1. --- Loading / No Data States ---
      if (
        !busData ||
        !busData.layout ||
        !busData.seats ||
        busData.backSeats === undefined || // Ensure counts are present
        busData.cabin === undefined
      ) {
        return selectedBusIdRef.current ? (
          <p className="text-center text-gray-500 italic my-4">
            Loading seat map or incomplete data...
          </p>
        ) : (
          <p className="text-center text-gray-500 italic my-4">
            Select a bus to see the layout.
          </p>
        );
      }

      // 2. --- Destructure and Prepare Data ---
      const {
        layout,
        seats,
        cabin: cabinSeatCount,
        backSeats: backSeatCount,
      } = busData;

      // Sort ALL seat IDs numerically/lexicographically
      const allSeatIds = Object.keys(seats).sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
        const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
        if (numA !== numB) return numA - numB;
        return a.localeCompare(b); // Fallback
      });

      const totalSeats = allSeatIds.length;

      // Validate counts
      if (
        cabinSeatCount < 0 ||
        backSeatCount < 0 ||
        cabinSeatCount + backSeatCount > totalSeats
      ) {
        console.error("Invalid cabinSeatCount or backSeatCount.");
        return (
          <p className="text-center text-red-500 italic my-4">
            Error: Invalid seat counts provided.
          </p>
        );
      }

      // Slice the sorted IDs into categories
      const cabinSeatIds = allSeatIds.slice(0, cabinSeatCount);
      const backSeatIds = allSeatIds.slice(totalSeats - backSeatCount);
      const middleSeatIds = allSeatIds.slice(
        cabinSeatCount,
        totalSeats - backSeatCount,
      );

      // Identify the first two *middle* seats to be designated as doors
      const doorSeatIds = middleSeatIds.slice(0, 2); // Takes the first two middle seats

      // 3. --- Helper function to render a single seat Button ---
      // (Does NOT render doors, only clickable seats or placeholders for missing data)
      const renderSeatButton = (
        seatId: string,
        seatData: Seat | undefined,
        seatType: "cabin" | "main" | "back",
      ): JSX.Element => {
        if (!seatData) {
          console.warn("Seat data missing for ID:", seatId);
          return (
            <div
              key={`missing-${seatType}-${seatId}`}
              className="w-12 h-12 bg-gray-200 rounded border border-gray-300"
              title={`Missing data for ${seatId}`}
            >
              ?
            </div>
          );
        }

        let seatClass =
          "w-12 h-12 flex items-center justify-center rounded text-xs font-semibold border transition duration-200 ease-in-out transform hover:scale-105 ";
        let title = `Seat ${seatId}`;
        let isDisabled = false;
        const isSelectedByMe = mySelections.includes(seatId);

        // Add specific styling based on seat type
        if (seatType === "back") {
          seatClass += " border-purple-400 ";
          title += " (Back)";
        } else if (seatType === "cabin") {
          seatClass += " border-indigo-400 ";
          title += " (Cabin)";
        } else {
          // Main seat
          seatClass += " border-gray-300 ";
        }

        switch (seatData.status) {
          case "available":
            seatClass +=
              "bg-green-100 hover:bg-green-300 text-green-800 cursor-pointer";
            title += " (Available)";
            break;
          case "selected":
            if (isSelectedByMe && seatData.user === usernameRef.current) {
              seatClass +=
                "bg-blue-500 hover:bg-blue-600 text-white ring-2 ring-blue-300 cursor-pointer";
              title += ` (Your Selection)`;
            } else {
              seatClass +=
                "bg-yellow-400 text-yellow-800 opacity-70 cursor-not-allowed";
              isDisabled = true;
              title += ` (Selected by ${seatData.user || "another user"})`;
            }
            break;
          case "booked":
            seatClass +=
              "bg-gray-400 text-gray-700 opacity-60 cursor-not-allowed";
            isDisabled = true;
            title += ` (Booked${seatData.user ? ` by ${seatData.user}` : ""})`;
            break;
          default:
            seatClass += "bg-red-200"; // Unknown state
            title += " (Unknown Status)";
            break;
        }

        // Final disability check
        isDisabled = isDisabled || !isConnected || !username.trim();

        return (
          <button
            key={seatId}
            className={`${seatClass} disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:bg-inherit`}
            onClick={() => handleSeatClick(seatId)}
            disabled={isDisabled}
            title={title}
            aria-label={title}
          >
            {seatId}
          </button>
        );
      };

      // 4. --- Render Cabin Seats Area (If any) ---
      let cabinSeatElements: JSX.Element | null = null;
      if (cabinSeatCount > 0) {
        cabinSeatElements = (
          <div className="mb-4 p-2 border border-indigo-200 rounded bg-indigo-50 w-full">
            <p className="text-center text-sm font-medium text-indigo-700 mb-2">
              Cabin Area
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {cabinSeatIds.map((id) =>
                renderSeatButton(id, seats[id], "cabin"),
              )}
            </div>
          </div>
        );
      }

      // 5. --- Render Main Seat Grid Area ---
      const mainSeatGrid: JSX.Element[][] = Array.from(
        { length: layout.rows },
        () => [],
      );
      let currentMiddleSeatIndex = 0;
      let mainSeatsRendered = false; // Flag to check if any main seats were actually processed

      // Check if layout dimensions make sense for the number of middle seats
      const expectedGridSlots = layout.rows * layout.seatsPerRow;

      // Note: This doesn't perfectly account for aisles, but gives a basic check
      if (middleSeatIds.length > expectedGridSlots) {
        console.warn(
          `Layout (${layout.rows}x${layout.seatsPerRow}) might be too small for ${middleSeatIds.length} middle seats.`,
        );
      }

      for (let r = 0; r < layout.rows; r++) {
        for (let c = 0; c < layout.seatsPerRow + 1; c++) {
          // Add Aisle Space if applicable in this column
          if (layout.aisleAfter !== null && c === layout.aisleAfter + 1) {
            mainSeatGrid[r].push(
              <div
                key={`aisle-${r}-${c}`} // More specific key
                className="w-6 h-12 flex items-center justify-center text-xs text-gray-400"
                title="Aisle"
              >
                ||
              </div>,
            );
            // Continue to next column iteration, aisle doesn't consume a seat index
            continue;
          }

          // Check if we still have middle seats to render
          if (currentMiddleSeatIndex < middleSeatIds.length) {
            mainSeatsRendered = true; // Mark that we processed at least one seat/door
            const currentSeatId = middleSeatIds[currentMiddleSeatIndex];
            const seatData = seats[currentSeatId];

            // Check if this seat is designated as a door
            if (doorSeatIds.includes(currentSeatId)) {
              // mainSeatGrid[r].push(
              //   <div
              //     key={currentSeatId} // Use seat ID for key
              //     className="w-12 h-12 flex items-center justify-center rounded text-sm font-medium bg-orange-300 border border-orange-500 text-orange-800 opacity-80"
              //     title={`Seat ${currentSeatId} (Designated Door)`}
              //   >
              //     DOOR
              //   </div>,
              // );

              mainSeatGrid[r].push(
                renderSeatButton(currentSeatId, seatData, "main"),
              );
            } else {
              // Render a regular middle seat button
              mainSeatGrid[r].push(
                renderSeatButton(currentSeatId, seatData, "main"),
              );
            }
            currentMiddleSeatIndex++; // Advance to the next middle seat ID
          } else {
            // No more middle seats left, fill remaining visual grid spots with placeholders
            mainSeatGrid[r].push(
              <div key={`empty-${r}-${c}`} className="w-12 h-12"></div>, // Placeholder for empty grid slot
            );
          }
        } // end col loop (c)

        // Add Aisle at the very end of the row if needed (redundant if handled above, but safe)
        if (
          layout.aisleAfter !== null &&
          layout.seatsPerRow === layout.aisleAfter + 1 &&
          layout.aisleAfter === layout.seatsPerRow - 1
        ) {
          mainSeatGrid[r].push(
            <div
              key={`aisle-end-${r}`}
              className="w-6 h-12 flex items-center justify-center text-xs text-gray-400"
              title="Aisle"
            >
              ||
            </div>,
          );
        }
      } // end row loop (r)
      // 6. --- Render Back Seats Area (If any) ---
      let backSeatElements: JSX.Element | null = null;
      if (backSeatCount > 0) {
        backSeatElements = (
          <div className="mt-4 p-2 border border-purple-200 rounded bg-purple-50 w-full">
            <p className="text-center text-sm font-medium text-purple-700 mb-2">
              Back Seats
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {backSeatIds.map((id) => renderSeatButton(id, seats[id], "back"))}
            </div>
          </div>
        );
      }

      // 7. --- Assemble Final Layout ---
      return (
        <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200 w-full max-w-lg mx-auto">
          {" "}
          {/* Added width constraints */}
          {/* Optional Driver Area visualization */}
          <div className="text-xs text-gray-400 mb-1">(Driver Area)</div>
          {/* Render Cabin Seats */}
          {cabinSeatElements}
          {/* Divider */}
          {(cabinSeatElements || mainSeatsRendered) && (
            <div className="w-full border-t border-dashed border-gray-300 my-3"></div>
          )}
          {/* Render Main Seats Area */}
          {mainSeatsRendered && ( // Only render main section if seats/doors were placed
            <div className="w-full">
              <div className="text-sm font-medium text-gray-600 text-center mb-2">
                Front of Main Section
              </div>
              {/* Optional visual guide for top border? <div className="w-full border-t border-gray-300 mb-2"></div> */}
              <div className="flex flex-col items-center gap-2">
                {" "}
                {/* Center rows */}
                <div
                  className="w-[50%]"
                  onClick={() => {
                    console.log(mainSeatGrid);
                  }}
                >
                  door
                </div>
                {mainSeatGrid.map((rowSeats, r) => (
                  <div
                    key={`row-${r}`}
                    className="flex items-center justify-center gap-2" // Row container
                    onClick={() => {
                      console.log(rowSeats);
                    }}
                  >
                    {/* {rowSeats} */}
                    {/* {mainSeatGrid.length - 1 === r ? (
                      <> {rowSeats.reverse()}</>
                    ) : (
                      <> {rowSeats}</>
                    )} */}
                    {/* Best of luck Eshan Pokhrel :) */}
                    {mainSeatGrid.length - 1 === r ? (
                      <> {rowSeats.reverse()}</>
                    ) : (
                      <>
                        <div
                          className={`flex gap-2 ${r === 0 ? " mt-28 " : ""}`}
                        >
                          {rowSeats[0]}
                          {rowSeats[1]}
                          {rowSeats[2]}
                        </div>
                        <div
                          className={`flex gap-2 ${r > 0 ? " -mt-28 " : ""}`}
                        >
                          {rowSeats[3]}
                          {rowSeats[4]}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              {/* Optional visual guide for bottom border? <div className="w-full border-t border-gray-300 mt-2"></div> */}
              <div className="text-sm font-medium text-gray-600 text-center mt-2">
                Back of Main Section
              </div>
            </div>
          )}
          {/* Divider */}
          {mainSeatsRendered && backSeatElements && (
            <div className="w-full border-t border-dashed border-gray-300 my-3"></div>
          )}
          {/* Render Back Seats */}
          {backSeatElements}
          {/* Final Footer Label */}
          {backSeatElements && (
            <div className="text-sm font-medium text-gray-600 mt-2">
              Very Back of Bus
            </div>
          )}
        </div>
      );
    },
    [
      busData,
      mySelections,
      handleSeatClick,
      isConnected,
      username,
      selectedBusIdRef,
      usernameRef,
    ], // Dependencies
  );

  // --- Main Component Return ---
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Real-time Bus Booking
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Connection:{" "}
          {isConnected ? (
            <span className="text-green-600 font-semibold">Connected</span>
          ) : (
            <span className="text-red-600 font-semibold">Disconnected</span>
          )}
          {socket?.id && isConnected && (
            <span className="text-gray-400 text-xs ml-1">
              (ID: {socket.id})
            </span>
          )}
        </p>
      </header>

      {/* --- Message and Error Display --- */}
      <div className="mb-4 h-10">
        {" "}
        {/* Fixed height prevents layout shifts */}
        {error && (
          <div className="p-2 bg-red-100 border border-red-300 text-red-700 rounded-md text-sm shadow-sm">
            <span className="font-semibold">Error:</span> {error}
          </div>
        )}
        {!error && message && (
          <div className="p-2 bg-blue-100 border border-blue-300 text-blue-700 rounded-md text-sm shadow-sm">
            {message}
          </div>
        )}
      </div>

      {/* --- User Input and Bus Selection Form --- */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Your Details & Bus Choice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input Fields */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your full name"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm disabled:bg-gray-100"
              disabled={!isConnected}
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm disabled:bg-gray-100"
              disabled={!isConnected}
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Optional phone number"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm disabled:bg-gray-100"
              disabled={!isConnected}
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Optional pickup/dropoff location"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm disabled:bg-gray-100"
              disabled={!isConnected}
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Notes
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special requests or notes (optional)"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm disabled:bg-gray-100"
              rows={2}
              disabled={!isConnected}
            />
          </div>

          {/* Bus Selection Dropdown */}
          <div className="md:col-span-2">
            <label
              htmlFor="busSelect"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Select Bus <span className="text-red-500">*</span>
            </label>
            <select
              id="busSelect"
              value={selectedBusId}
              onChange={handleBusSelect}
              disabled={!isConnected || buses.length === 0}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              aria-label="Select a bus"
              required
              aria-required="true"
            >
              <option value="">
                -- {isConnected ? "Select a Bus" : "Connecting..."} --
              </option>
              {buses.map((bus) => (
                <option key={bus.id} value={bus.id}>
                  {bus.name} ({bus.id})
                </option>
              ))}
            </select>
            {!isConnected && (
              <p className="text-xs text-red-500 mt-1">
                Cannot select bus while disconnected.
              </p>
            )}
            {isConnected && buses.length === 0 && (
              <p className="text-xs text-yellow-600 mt-1">
                No buses available from server.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* --- Seat Map and Booking Section --- */}
      {selectedBusId && isConnected && busData ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seat Map Column */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Seat Map for:{" "}
              <span className="font-bold text-blue-600">
                {buses.find((b) => b.id === selectedBusId)?.name ||
                  selectedBusId}
              </span>
            </h2>
            {/* Legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-xs text-gray-600">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>{" "}
                Available
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-blue-500 border border-blue-600 rounded"></div>{" "}
                Your Selection
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-yellow-400 border border-yellow-500 rounded"></div>{" "}
                Selected (Other)
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-gray-400 border border-gray-500 rounded"></div>{" "}
                Booked
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-orange-300 border border-orange-500 rounded"></div>{" "}
                Door
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 border-2 border-purple-400 rounded"></div>{" "}
                Back Seat Area
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-4 bg-gray-300"></div> Aisle
              </div>
            </div>
            {renderSeats()}
          </div>

          {/* Booking Summary Column */}
          <div className="lg:col-span-1">
            <div className="p-6 bg-white rounded-lg shadow border border-gray-200 sticky top-8">
              {" "}
              {/* Sticky for long maps */}
              <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
                Your Selections ({mySelections.length})
              </h3>
              {mySelections.length > 0 ? (
                <>
                  <ul className="space-y-1 mb-4 max-h-48 overflow-y-auto pr-2">
                    {" "}
                    {/* Scrollable list */}
                    {[...mySelections] // Create a sorted copy for display
                      .sort((a, b) => {
                        const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
                        const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
                        return numA - numB || a.localeCompare(b);
                      })
                      .map((seatId) => (
                        <li
                          key={seatId}
                          className="text-sm font-medium text-gray-700 bg-blue-50 p-1 rounded border border-blue-200"
                        >
                          Seat {seatId}
                        </li>
                      ))}
                  </ul>
                  <button
                    onClick={handleBookSeats}
                    disabled={
                      !isConnected ||
                      mySelections.length === 0 ||
                      !username.trim() ||
                      !email.includes("@") // Basic validation check
                    }
                    className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                  >
                    Book Selected Seats ({mySelections.length})
                  </button>
                  {(!username.trim() || !email.includes("@")) && (
                    <p className="text-xs text-red-500 mt-2">
                      Please provide your name and a valid email to book.
                    </p>
                  )}
                </>
              ) : (
                <p className="text-sm text-gray-500 italic">
                  Click available seats on the map to select them.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Placeholder when no bus is selected or not connected
        <div className="text-center text-gray-500 mt-10">
          {!isConnected ? (
            <p>Attempting to connect to the booking server...</p>
          ) : !selectedBusId ? (
            <p>Please select a bus from the list above to view seats.</p>
          ) : (
            <p>Loading data for the selected bus...</p> // Should be covered by Loading state, but fallback
          )}
        </div>
      )}
    </div>
  );
};

export default BusBooking;
