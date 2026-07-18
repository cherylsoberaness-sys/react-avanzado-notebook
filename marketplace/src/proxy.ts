// Crea el proxy por defect de Next.js

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";


export default async function proxy(request: NextRequest) {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
        console.log("Redirecting to login");
        return NextResponse.redirect(new URL("/login", request.url));
        
    }

    console.log("User logged in")
}

export const config = {
  matcher: "/dashboard/:path*",
};