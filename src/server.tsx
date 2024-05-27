import { $ } from "bun";
import api from "./api";
import { Board, boards } from "./constants";
import AboutPage from "./views/pages/about-page";
import BoardPage from "./views/pages/board-page";
import Homepage from "./views/pages/home-page";
import TestPage from "./views/pages/test-page";
import ThreadPage from "./views/pages/thread-page";

export default function server() {
  const router: { [x: string]: Function } = {
    "/": Homepage,
    "/about": AboutPage,
    "/test": TestPage,
  };

  const server = Bun.serve({
    port: 3000,
    async fetch(req, ser) {
      if (ser.upgrade(req)) {
        return;
      }

      console.log(req.method, req.url);
      const url = new URL(req.url);

      if (router[url.pathname]) {
        const res = new Response(router[url.pathname]() as string);
        res.headers.set("Content-Type", "text/html");
        return res;
      } else if (boards.some((b) => `/${b}` == url.pathname)) {
        const res = new Response(
          (
            <BoardPage board={url.pathname as Board} active_threads={[]} />
          ) as string
        );
        res.headers.set("Content-Type", "text/html");
        return res;
      } else if (url.pathname.startsWith("/thread")) {
        const res = new Response(
          (
            <ThreadPage
              thread={{
                id: 1,
                title: "Hello",
                content: "World",
                img_url: "https://example.com",
                board: Board.technology,
                posts: [],
              }}
            />
          ) as string
        );
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
    websocket: {
      message() {},
      open() {},
      close() {},
      drain() {},
    },
  });

  console.log(`Listening on http://localhost:${server.port} ...`);
}
