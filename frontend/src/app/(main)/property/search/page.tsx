import BookingSectionPage from "@/components/layouts/room-detail/BookingSection";
import RoomDetail from "@/components/layouts/room-detail/RoomDetail";
import { fetchRoomsDetailsByQuery } from "@/services/room.service";

export default async function PropertyDetailPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const propertyname = searchParams.propertyname;
  const roomname = searchParams.roomname;

  if (!propertyname || !roomname) {
    return <div className="p-8">Property or room not specified</div>;
  }

  const data = await fetchRoomsDetailsByQuery(propertyname, roomname);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="relative h-[70px] bg-cover bg-center "></div>
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <RoomDetail data={data} />
          <BookingSectionPage />
        </div>
      </div>
    </main>
  );
}
