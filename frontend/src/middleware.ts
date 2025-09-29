import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verify, JwtPayload } from "jsonwebtoken";

function decodeJwt(token: string): JwtPayload | null {
  try {
    const secret = process.env.TOKEN_KEY;
    if (!secret) return null;
    return verify(token, secret) as JwtPayload;
  } catch (errror) {
    console.log(errror);
    return null;
  }
}

export function middleware(req: NextRequest) {
  const tokenCookie = req.cookies.get("token");
  const token = tokenCookie ? tokenCookie.value : null;

  const { pathname, search } = req.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("from", `${pathname}${search}`);
      return NextResponse.redirect(loginUrl);
    }

    const payload = decodeJwt(token);
    if (!payload) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    const role = payload.role as string | undefined;

    if (role === "tenant" && pathname.startsWith("/dashboard/history")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (role === "user") {
      const allowed = [
        "/dashboard",
        "/dashboard/history",
        "/dashboard/bookings",
        "/dashboard/notifications",
        "/dashboard/booking-detail",
        "/dashboard/payment-page",
        "/dashboard/booking-confirmation",
      ];

      const isAllowed = allowed.some(
        (path) => pathname === path || pathname.startsWith(`${path}/`)
      );

      if (!isAllowed) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
