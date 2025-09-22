"use client";

import { useRouter, useParams } from "next/navigation";
import { useEditRoom, useRoomById } from "@/hooks/useRoom";
import RoomForm from "../RoomForm";
import { toast } from "sonner";

const EditRoom = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { data, isLoading } = useRoomById(id);
  const editRoom = useEditRoom();

  if (isLoading) return <p className="p-4">Loading...</p>;

  const fetchedRoomData = {
    id,
    property_id: data?.response?.property_id || "",
    name: data?.response?.name || "",
    description: data?.response?.description || "",
    base_price: Number(data?.response?.base_price) || 0,
    capacity: data?.response?.capacity || 0,
    total_rooms: data?.response?.total_rooms || 0,
    image: [],
    oldImages:
      data?.response?.room_images.map(
        (img: { image_url: string }) => img.image_url
      ) || [],
    weekend_peak: data?.response?.weekend_peak || { type: "nominal", value: 0 },
  };

  return (
    <RoomForm
      defaultValues={fetchedRoomData}
      onSubmit={(data) =>
        editRoom.mutate(data, {
          onSuccess: () => {
            toast.success("Room updated!");
            router.push("/dashboard/property");
          },
          onError: (error) => toast.error(error.message),
        })
      }
      isPending={editRoom.isPending}
      cancelHandler={() => router.back()}
    />
  );
};

export default EditRoom;
