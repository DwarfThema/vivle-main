import Layout from "../components/layout";
import IndexPage from "../components/IndexPage";
import PointerFollower from "../components/motions/pointerFollower";
import Meta from "../components/meta";
import { useEffect } from "react";
import setScreenHeight from "../components/setScreenHeight";

export default function Home() {
  useEffect(() => {
    setScreenHeight;

    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);
  return (
    <Layout seoTitle="VIVLE PARK">
      <Meta />
      <PointerFollower />
      <IndexPage />
    </Layout>
  );
}
