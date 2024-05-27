export default function Root({
  children,
  head,
}: {
  readonly children: JSX.Element | JSX.Element[];
  readonly head: JSX.Element | JSX.Element[];
}) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/styles.css" />
        {process.env.NODE_ENV === "development" ? <script src="/dev.js" /> : null}
        {head}
      </head>
      <body>{children}</body>
      <script
        src="https://unpkg.com/htmx.org@1.9.12"
        integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2"
        crossorigin="anonymous"
      ></script>
    </html>
  );
}
