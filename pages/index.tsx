import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import UseFollowPointer from "../components/useFollowPointer";

const inter = Inter({ subsets: ["latin"] });

const mainBoxVariants: Variants = {
  open: {
    opacity: 1,
    scaleY: 1,
    y: 0,
    transition: { stiffness: 1000, velocity: -100 },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    y: "100%",
    transition: { stiffness: 1000, velocity: -100 },
  },
};

export default function Home() {
  const mouseFollower = useRef(null);
  const { x, y } = UseFollowPointer(mouseFollower);

  const [page, setPage] = useState<number>(0);
  const TOTAL_PAGE = 3;

  useEffect(() => {
    window.addEventListener("wheel", changePage);

    function changePage(e: WheelEvent) {
      if (page !== TOTAL_PAGE) {
        setPage((page + 1) % TOTAL_PAGE);
      } else {
        setPage(0);
      }
    }
  }, [page]);

  return (
    <Layout seoTitle="VivlePark">
      <div className="h-screen bg-black text-white">
        <motion.div
          className="h-full w-full bg-green-400 absolute top-0"
          variants={mainBoxVariants}
          animate={page === 2 ? "open" : "closed"}
        ></motion.div>
        <motion.div
          className="h-full w-full bg-blue-400 absolute top-0"
          variants={mainBoxVariants}
          animate={page === 1 ? "open" : "closed"}
        ></motion.div>
        <motion.div
          className="h-screen w-screen bg-red-400 absolute top-0"
          variants={mainBoxVariants}
          animate={page === 0 ? "open" : "closed"}
        ></motion.div>
        <motion.div
          ref={mouseFollower}
          className=" h-6 w-6 absolute rounded-full border-red-300 border-dotted border-2"
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 400,
          }}
        />
      </div>
    </Layout>
  );
}
