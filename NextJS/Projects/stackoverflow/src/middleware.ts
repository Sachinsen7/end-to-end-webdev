import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getOrCreateDB from "./models/server/db-setup";
import getOrCreateStorageBucket from "./models/server/storage-setup";

export async function middleware(request: NextRequest) {
  await Promise.all([getOrCreateDB(), getOrCreateStorageBucket()]);
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

// this will not run
