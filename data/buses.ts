// /data/buses.ts
export interface Bus {
  id: number;
  operator: string;
  type: string;
  date: string;
  departureTime: string;
  duration: string;
  price: string;
  rating: number;
  ratingCount: number;
  liveTracking: boolean;
  seatsLeft: number;
  windowSeats: number;
}

export const buses: Bus[] = [
  {
    id: 1,
    operator: "a Holidays",
    type: "A/C Deluxe Seater /Sleeper (2+1)",
    date: "9.Apr.2026",
    departureTime: "7:30",
    duration: "04hrs 10mins",
    price: "RS. 1,080",
    rating: 4.9,
    ratingCount: 156,
    liveTracking: true,
    seatsLeft: 46,
    windowSeats: 26,
  },
  {
    id: 2,
    operator: "b Holidays",
    type: "A/C Deluxe Seater /Sleeper (2+1)",
    date: "9.Apr.2026",
    departureTime: "8:30",
    duration: "04hrs 10mins",
    price: "RS. 1,080",
    rating: 4.9,
    ratingCount: 156,
    liveTracking: true,
    seatsLeft: 46,
    windowSeats: 26,
  },
  {
    id: 3,
    operator: "c Holidays",
    type: "A/C Deluxe Seater /Sleeper (2+1)",
    date: "9.Apr.2026",
    departureTime: "9:30",
    duration: "04hrs 10mins",
    price: "RS. 1,080",
    rating: 4.9,
    ratingCount: 156,
    liveTracking: true,
    seatsLeft: 46,
    windowSeats: 26,
  },
];