"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role: string) => {
    setForm({ ...form, role });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // fetch("/api/auth/register", { method: "POST", body: JSON.stringify(form) })
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-yellow-200"></div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="w-full max-w-md shadow-lg p-4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Create an Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div>
                <Label htmlFor="username" className="mb-2">
                  Username
                </Label>
                <Input
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  placeholder="Enter your username"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="mb-2">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>

              {/* Role */}
              <div>
                <Label>Register as</Label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.role === "user"}
                      onChange={() => handleRoleChange("user")}
                    />
                    User
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.role === "tenant"}
                      onChange={() => handleRoleChange("tenant")}
                    />
                    Tenant
                  </label>
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-sm text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social buttons */}
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className="flex items-center gap-2 w-full">
                <FcGoogle className="text-red-500" /> Continue with Google
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 w-full">
                <FaGithub /> Continue with GitHub
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 w-full">
                <FaFacebook className="text-blue-600" /> Continue with Facebook
              </Button>
            </div>
          </CardContent>

          <CardFooter className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-500 hover:underline ml-1">
              Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
