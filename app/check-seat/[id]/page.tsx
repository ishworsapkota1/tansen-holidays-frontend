import ClientBooking from "./ClientBooking";
import { buses } from "@/data/buses"

// Server component to handle params
export default async function CheckSeat({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const bus = buses.find(b => b.id.toString() === id);
  
    if (!bus) {
      return <div className="text-center py-10">Bus not found</div>;
    }
  
    return <ClientBooking bus={bus} />;
  }