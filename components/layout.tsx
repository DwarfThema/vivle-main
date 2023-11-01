import Head from "next/head";
import Header from "./header";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./googleAnalytic";

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
      <GoogleAnalytics />
      {children}
      <Analytics />
    </>
  );
}
