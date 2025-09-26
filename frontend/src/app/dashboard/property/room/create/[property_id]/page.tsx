<<<<<<< HEAD
import CreateRoom from "@/components/layouts/dashboard/room/create-room";
import React from "react";

const page = () => {
  return <CreateRoom />;
};

export default page;
=======
"use client";

import CreateRoom from "@/components/layouts/dashboard/room/create/create-room";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { property_id } = useParams<{ property_id: string }>();

  if (!property_id) return <p className="p-4">Property ID not found</p>;

  return <CreateRoom property_id={property_id} />;
};

export default Page;
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
