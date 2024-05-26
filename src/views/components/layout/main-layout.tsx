import Root from "../../root";

export default function MainLayout({
  children,
  title = 'Imageboard',
}: {
  readonly children: JSX.Element | JSX.Element[];
  readonly title?: string;
}) {
  return (
    <Root head={<title>{title}</title>}>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/test">Test</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </Root>
  );
}
