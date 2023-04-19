import Head from "next/head";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
  seoTitle?: string;
}
export default function Layout({ children, seoTitle }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`${seoTitle} | 비블파크`}</title>
        <meta content="Vivle-Thema" property="og:title" />
        <meta content="//www.vivle-thema.vercel.app/" property="og:url" />
        <meta content="VivleThema 3D Interactive" property="og:description" />
        <meta content="/dwarfthema.png" property="og:image" />
      </Head>
      <Header />
      {children}
    </>
  );
}
