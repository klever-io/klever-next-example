import { NextRequest, NextResponse } from "next/server";
import { authKey } from "./config";

export default function middleware({ url, cookies }: NextRequest) {
  const cookie = cookies.get(authKey);
  if (!cookie) {
    return NextResponse.redirect(new URL("/", url));
  }

  const { value } = cookie;
  if (!value) {
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/private/:path*",
};
