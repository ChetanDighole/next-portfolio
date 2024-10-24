import { NextResponse } from "next/server";
import { authMiddleware } from "./myMiddlewares/authMiddleware";

export async function middleware(req) {
  const auth = await authMiddleware(req);

  if (!auth) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/skill", "/api/certification"],
};
