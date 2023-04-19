import Layout from "../components/layout";
import IndexPage from "../components/IndexPage";
import PointerFollower from "../components/motions/pointerFollower";
import Meta from "../components/meta";

export default function Home() {
  return (
    <Layout seoTitle="VivlePark">
      <Meta />
      <PointerFollower />
      <IndexPage />
    </Layout>
  );
}
