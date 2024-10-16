import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Check if token exists (i.e., user is authenticated)
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url)); // Redirect to sign-in page if not authenticated
  }

  // If authenticated, continue to the API route
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/skill"], // Protect specific routes, like /api/postskill and /admin
};
