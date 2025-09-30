"use client";

import { Button } from "@/components/ui/button";
import { useLogoutUser } from "@/hooks/useAuth";

export const ButtonLogout = () => {
  const { mutate: logout, isPending } = useLogoutUser();

  return (
    <Button
      onClick={() => logout()}
      variant="destructive"
      className="w-full cursor-pointer"
      disabled={isPending}>
      {isPending ? "Logging out..." : "Logout"}
    </Button>
  );
};
