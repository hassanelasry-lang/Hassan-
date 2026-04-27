import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/utils/auth";
import { Role } from "./constants/role"; // تأكد من صحة هذا المسار

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session || session.user.role !== Role.Administrator) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  return NextResponse.next();
}

export default proxy;