"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFetchMe } from "@/hooks/useUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";

async function updateTenant(data: {
  company_name: string;
  address: string;
  phone_number: string;
  logo: string;
}) {
  const res = await fetch("http://localhost:4000/tenant/update", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update tenant");
  return res.json();
}

const TenantDashboard = () => {
  const { data, isLoading } = useFetchMe();
  const queryClient = useQueryClient();
  const user = data;

  // local state tenant
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [logo, setLogo] = useState("");

  //   useEffect(() => {
  //     if (data?.tenants?.length! > 0) {
  //       const tenant = user.tenants[0];
  //       setCompanyName(tenant.company_name || "");
  //       setAddress(tenant.address || "");
  //       setPhoneNumber(tenant.phone_number || "");
  //       setLogo(tenant.logo || "");
  //     }
  //   }, [user]);

  const mutation = useMutation({
    mutationFn: updateTenant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      company_name: companyName,
      address,
      phone_number: phoneNumber,
      logo,
    });
  };

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (!user?.tenants?.length)
    return <p className="p-4">No tenant data found</p>;

  return (
    <div className="flex-1 p-4 lg:p-8">
      <Card className="w-full max-w-4xl mx-auto p-8">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">
            Tenant Information
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Company Name</Label>
              <Input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div>
              <Label>Address</Label>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <Label>Company Logo URL</Label>
              <Input value={logo} onChange={(e) => setLogo(e.target.value)} />
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                // onClick={() => {
                //   if (user?.tenants?.length > 0) {
                //     const tenant = user.tenants[0];
                //     setCompanyName(tenant.company_name || "");
                //     setAddress(tenant.address || "");
                //     setPhoneNumber(tenant.phone_number || "");
                //     setLogo(tenant.logo || "");
                //   }
                // }}
                className="flex-1">
                Discard Changes
              </Button>
              <Button
                type="submit"
                disabled={mutation.isPending}
                className="flex-1 bg-orange-500 hover:bg-orange-600">
                {mutation.isPending ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenantDashboard;
