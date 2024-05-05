"use client";

import IndexPage from "../components/IndexPage";
import PointerFollower from "../components/motions/pointerFollower";

export default function Home() {
  return (
    <main className="bg-black">
      <PointerFollower />
      <IndexPage />
    </main>
  );
}
