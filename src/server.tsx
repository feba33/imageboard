import api from "./api";
import AboutPage from "./views/pages/about-page";
import Homepage from "./views/pages/home-page";
import TestPage from "./views/pages/test-page";

export default function server() {
  const router: { [x: string]: Function } = {
    "/": Homepage,
    "/about": AboutPage,
    '/test': TestPage
  };

  const server = Bun.serve({
    port: 3000,
    async fetch(req) {
      const url = new URL(req.url);

      if (router[url.pathname]) {
        const res = new Response(router[url.pathname]() as string);
        res.headers.set("Content-Type", "text/html");
        return res;
      }

      if (url.pathname.startsWith("/api")) {
        return await api(req);
      }

      const file = Bun.file("./public" + url.pathname);

      if (file) {
        return new Response(file);
      }

      return new Response("Not found", { status: 404 });
    },
    error(e) {
      console.error(e);
      return new Response("Something went wrong", { status: 500 });
    },
  });

  console.log(`Listening on http://localhost:${server.port} ...`);
}
