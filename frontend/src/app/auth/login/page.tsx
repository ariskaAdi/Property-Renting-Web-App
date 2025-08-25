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
import { useRouter } from "next/navigation";
import { useLoginUser } from "@/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const { mutate: login, isPending, isError } = useLoginUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(
      {
        email: form.email,
        password: form.password,
      },
      {
        onSuccess: (data) => {
          console.log(data);

          router.push("/");
        },
        onError: (error) => {
          console.log(error);
          alert("gagal login");
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-yellow-200"></div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="w-full max-w-md shadow-lg p-4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                  placeholder="Enter your password"
                />
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Loading..." : "Login"}
              </Button>
            </form>
            {isError && <p className="text-red-500">Gagal Login</p>}

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
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-blue-500 hover:underline ml-1">
              Sign up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
