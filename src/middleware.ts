import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  console.log(token)

  if (pathname.startsWith("/admin")) {
    if (token?.email !== process.env.NEXT_PUBLIC_EMAIL) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
}