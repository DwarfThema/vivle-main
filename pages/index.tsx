import Layout from "../components/layout";
import IndexPage from "../components/IndexPage";
import PointerFollower from "../components/motions/pointerFollower";
import { useEffect, useState } from "react";
import setScreenHeight from "../components/setScreenHeight";

export default function Home() {
  const [title, setTitle] = useState<string>("Main");

  useEffect(() => {
    setScreenHeight;

    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);
  return (
    <Layout seoTitle={title}>
      <PointerFollower />
      <IndexPage />
    </Layout>
  );
}
