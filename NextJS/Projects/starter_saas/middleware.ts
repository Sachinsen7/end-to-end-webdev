import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

const publicRoutes = ["/", "/sign-in", "/sign-up", "/api/webhook/register"];

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && !publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (userId) {
    try {
      const client = await clerkClient();
      const user = await client.users.getUser(userId);
      const role = user.publicMetadata.role as string | undefined;
      console.log("User role:", role);

      // admin role redirection

      if (role === "admin" && req.nextUrl.pathname !== "/dashboard") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      }

      // prevent non admin user to access the admin routes

      if (role !== "admin" && req.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      // redirect auth user
      if (publicRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(
          new URL(role === "admin" ? "/admin/dashboard" : "/dashboard", req.url)
        );
      }
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL("/error", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpg|jpeg|png|gif|webp|svg|ico|woff2?|ttf|eot|mp4|webm|zip|pdf)).*)",
    "/(api|trpc)(.*)",
  ],
};
