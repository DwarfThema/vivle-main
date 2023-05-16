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
        <title>{`${seoTitle} || 비블파크`}</title>
      </Head>
      <Header />
      {children}
    </>
  );
}
