/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from "next/server";

// Define protected routes
const protectedPaths = ["/admin"];

export function middleware(req: NextRequest) {
  console.log("middleware..................................................");
  const { pathname } = req.nextUrl;

  // Check if the route is protected
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));
  if (!isProtected || pathname === "/admin/signin") {
    console.log("not protected!", pathname);
    return NextResponse.next();
  }
  console.log("protected ", pathname);
  // Read token from cookies or localStorage (for dev use)
  const token = req.cookies.get("refreshToken")?.value;

  console.log(token, "--***--");
  if (!token) {
    // Redirect if no token
    const loginUrl = new URL("/admin/signin", req.url);
    return NextResponse.redirect(loginUrl);
  }

  try {
    // Optionally verify JWT expiration manually here (if encoded in token)
    // but usually backend should handle that when requesting data
    return NextResponse.next();
  } catch (err: any) {
    console.log(err);
    const loginUrl = new URL("/admin/signin", req.url);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to all /admin routes
};
