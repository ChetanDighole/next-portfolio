import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function authMiddleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // if (!token) {
  //   return NextResponse.redirect(new URL("/signin", req.url));
  // }

  // return NextResponse.next();
  return token;
}