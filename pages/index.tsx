import Layout from "../components/layout";
import IndexPage from "../components/IndexPage";
import PointerFollower from "../components/motions/pointerFollower";
import { useEffect } from "react";
import setScreenHeight from "../components/setScreenHeight";

export default function Home() {
  useEffect(() => {
    setScreenHeight;

    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);
  return (
    <Layout seoTitle="VIVLEPARK">
      <PointerFollower />
      <IndexPage />
    </Layout>
  );
}
