import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("Hello Masala Tea", { status: 200 });
    } else if (url.pathname === "/icetea") {
      return new Response("Ice Tea is good", { status: 200 });
    } else {
      return new Response("tea not found", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
