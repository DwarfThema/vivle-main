import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/header";

const roboto = Roboto({ weight: "900", subsets: ["latin"] });
const noto = Noto_Sans_KR({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vivlepark.com"),
  title: {
    template: "비블파크 VIVLEPARK",
    default: "비블파크 VIVLEPARK",
  },
  description: "비블파크는 XR 콘텐츠 제작 전문기업 입니다",
  keywords:
    "비블파크, 비블 파크, 비블, 파크, unity, 유니티, 유니티 외주, vrchat, 브이알챗, vrchat 외주, 브이알챗 외주, vrchat 맵 제작, vrchat 캐릭터 제작, 버츄얼 아바타 제작, 웹지엘, 웹지엘 외주, WebGL, WebGL 외주, WebGPU, WebGPU 외주, 메타버스, 메타버스 외주, 메타버스 맵, 메타버스 맵 제작, 매타버스 맵 제작 외주, 메타버스 콘텐츠 제작, 메타버스 캐릭터",
  openGraph: {
    title: "비블파크 VIVLEPARK",
    description: "비블파크는 XR 콘텐츠 제작 전문기업 입니다",
    url: "https://www.vivlepark.com",
    images: [
      {
        url: "/ogImage.png",
        width: 800,
        height: 600,
      },
      {
        url: "/ogImage.png",
        width: 1800,
        height: 1600,
        alt: "vivlepark ogImage alt",
      },
    ],
    locale: "en_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "비블파크 VIVLEPARK",
    description: "비블파크는 XR 콘텐츠 제작 전문기업 입니다",
    creator: "JunhoPark(DwarfThema)",
    images: ["/ogImage.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={`${inter.className} `}>
        <Analytics />
        <Header />
        <span className="absolute hidden">
          비블파크는 XR 콘텐츠 제작 전문기업 입니다
        </span>
        {children}
      </body>
    </html>
  );
}
