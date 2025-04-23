// /app/checkout/[id]/page.tsx
import { buses } from "@/data/buses";
import Checkout from "./Checkout"; // Fix: Change ./checkout to ./Checkout

export default async function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log("ID from params:", id); // Debug log
  console.log("Available bus IDs:", buses.map(b => b.id)); // Debug log
  const bus = buses.find(b => b.id.toString() === id);

  if (!bus) {
    console.log("Bus not found for ID:", id); // Debug log
    return <div className="text-center py-10">Bus not found</div>;
  }

  const ticketPrice = parseInt(bus.price.replace("RS. ", "").replace(",", ""));
  const discount = 10;
  const total = ticketPrice - discount;

  return <Checkout bus={bus} subtotal={ticketPrice} discount={discount} total={total} />;
}