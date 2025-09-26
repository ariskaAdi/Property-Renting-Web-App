<<<<<<< HEAD
import PropertyDetailPage from "@/components/pages/Detail";
import React from "react";

const page = () => {
  return (
    <div>
      <PropertyDetailPage />
    </div>
  );
};

export default page;
=======
import BookingSectionPage from "@/components/layouts/room-detail/BookingSection";
import RoomDetail from "@/components/layouts/room-detail/RoomDetail";
import { fetchRoomsDetailsByQuery } from "@/services/room.service";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function PropertyDetailPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
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
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
