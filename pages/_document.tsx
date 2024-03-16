import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ keyword }: { keyword: string }) {
  return (
    <Html lang="kr">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
