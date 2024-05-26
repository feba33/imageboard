import { boards } from "../../../constants";
import Root from "../../root";

export default function MainLayout({
  children,
  title = "Imageboard",
}: {
  readonly children: JSX.Element | JSX.Element[];
  readonly title?: string;
}) {
  return (
    <Root head={<title>{title}</title>}>
      <header class="w-full max-w-[1000px] mx-auto flex gap-8 justify-between items-baseline py-4">
        <a href="/">
          <h1 class="text-xl">imageboard</h1>
        </a>

        <nav>
          <ul class="flex gap-4">
            {boards.map((board) => (
              <li>
                <a href={board}>{board}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* <nav>
        <p>Topics:</p>
        <ul class="flex gap-4">
          {boards.map((board) => (
            <li>
              <a href={board}>{board}</a>
            </li>
          ))}
        </ul>
      </nav> */}
      <main class="w-full max-w-[1000px] mx-auto">{children}</main>
      <footer class="w-full max-w-[1000px] mx-auto py-4">
        <p>
          Made by feba &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* <nav>
          <ul>
            <li><a href='about'>About</a></li>
          </ul>
        </nav> */}
      </footer>
    </Root>
  );
}
