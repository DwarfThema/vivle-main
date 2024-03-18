import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ keyword }: { keyword: string }) {
  return (
    <Html lang="kr">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="비블파크는 XR 콘텐츠 제작 전문기업 입니다."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          name="keyword"
          content="비블파크, 비블 파크, 비블, 파크, unity, 유니티, 유니티 외주, vrchat, 브이알챗, vrchat 외주, 브이알챗 외주, vrchat 맵 제작, vrchat 캐릭터 제작, 버츄얼 아바타 제작, 웹지엘, 웹지엘 외주, WebGL, WebGL 외주, WebGPU, WebGPU 외주, 메타버스, 메타버스 외주, 메타버스 맵, 메타버스 맵 제작, 매타버스 맵 제작 외주, 메타버스 콘텐츠 제작, 메타버스 캐릭터"
        />
        <meta property="og:url" content="https://www.vivlepark.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="비블파크 VIVLEPARK" />
        <meta name="thumbnail" content="/apple-touch-icon-72x72.png" />
        <meta
          property="og:description"
          content="비블파크는 메타버스, XR공간 제작 전문기업 입니다."
        />
        <meta name="robots" content="max-snippet:50, max-image-preview:large" />

        <meta property="og:image" content="/ogImage.png" />
        <meta property="og:site_name" content="비블파크 VIVLEPARK" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vivlepark.com" />
        <meta property="twitter:url" content="https://www.vivlepark.com" />
        <meta name="twitter:title" content="비블파크 VIVLEPARK" />
        <meta
          name="twitter:description"
          content="비블파크는 메타버스, XR공간 제작 전문기업 입니다."
        />
        <meta
          name="twitter:image"
          content="https://vivlepark.com/ogImage.png"
        />

        <meta
          name="naver-site-verification"
          content="9df6b1efcfb6d871812a2f38381af8b288e82262"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
