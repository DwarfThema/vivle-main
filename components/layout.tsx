import Head from "next/head";
import Header from "./header";

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
    </>
  );
}
