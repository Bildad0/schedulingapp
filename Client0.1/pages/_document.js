import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return () => {
    <Html>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="My scheduling App" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>Scheduling App</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  };
}
