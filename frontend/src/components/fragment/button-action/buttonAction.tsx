"use client";

import { Button } from "@/components/ui/button";
import { useLogoutUser } from "@/hooks/useAuth";

import { useRouter } from "next/navigation";

export const ButtonLogout = () => {
  const router = useRouter();
  const logoutMutation = useLogoutUser();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      router.push("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="text-xs ml-2"
      disabled={logoutMutation.isPending}>
      {logoutMutation.isPending ? "Logging out..." : "Logout"}
    </Button>
  );
};
