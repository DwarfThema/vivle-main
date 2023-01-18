import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import UseFollowPointer from "../components/useFollowPointer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mouseFollower = useRef(null);
  const { x, y } = UseFollowPointer(mouseFollower);

  const [count, setCount] = useState<number>(1);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setCount(count + latest);
  });

  useEffect(() => {}, []);

  return (
    <Layout seoTitle="VivlePark">
      <div className="h-screen bg-black text-white">
        {count}
        <motion.div
          ref={mouseFollower}
          className=" h-10 w-10 absolute rounded-full border-red-300 border-dotted border-2"
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 20,
          }}
        />
      </div>
    </Layout>
  );
}
