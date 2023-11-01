import Head from "next/head";
import Header from "./header";
import { Analytics } from "@vercel/analytics/react";

interface LayoutProps {
  children: React.ReactNode;
  seoTitle: string;
  desc?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`비블파크 VIVLEPARK`}</title>
      </Head>
      <Header />
      {children}
      <Analytics />
    </>
  );
}
