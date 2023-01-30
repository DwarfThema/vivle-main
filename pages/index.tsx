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
  up: {
    opacity: 1,
    scaleY: 0,
    y: "-100%",
    transition: { type: "tween", duration: 1, ease: "easeInOut" },
  },

  open: {
    opacity: 1,
    scaleY: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  down: {
    opacity: 1,
    scaleY: 0,
    y: "100%",
    transition: { type: "tween", duration: 1, ease: "easeInOut" },
  },
};

export default function Home() {
  const mouseFollower = useRef(null);
  const { x, y } = UseFollowPointer(mouseFollower);

  const [enablePage, setEnablePage] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const pageRef = useRef(0);
  const enableRef = useRef(true);
  const TOTAL_PAGE = 3;

  useEffect(() => {
    window.addEventListener("wheel", (e) => changePage(e));

    function changePage(e: WheelEvent) {
      //console.log(e);

      if (enableRef.current) {
        console.log(enableRef.current, ": true");

        if (
          e.deltaY >= 0 &&
          e.deltaY <= 30 &&
          pageRef.current < TOTAL_PAGE - 1
        ) {
          pageRef.current += 1;

          setTimeout(() => {
            setEnablePage(true);
            enableRef.current = true;
          }, 1000);

          enableRef.current = false;
          setEnablePage(false);
        }
        if (e.deltaY <= 0 && pageRef.current > 0) {
          setTimeout(() => {
            setEnablePage(true);
            enableRef.current = true;
          }, 1000);

          pageRef.current -= 1;

          setEnablePage(false);
          enableRef.current = false;
        }
      }
    }
  }, [pageRef.current]);

  return (
    <Layout seoTitle="VivlePark">
      <motion.div
        ref={mouseFollower}
        className=" h-6 w-6 absolute rounded-full xl:border-red-300 border-dotted xl:border-2 lg:border-0 z-40 "
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 400,
        }}
      />
      <div className="h-screen text-white">
        <motion.div
          className="h-full w-full bg-green-400 absolute top-0"
          variants={mainBoxVariants}
          animate={
            pageRef.current === 2 ? "open" : pageRef.current < 2 ? "down" : "up"
          }
        >
          2
        </motion.div>
        <motion.div
          className="h-full w-full bg-blue-400 absolute top-0"
          variants={mainBoxVariants}
          animate={
            pageRef.current === 1 ? "open" : pageRef.current < 1 ? "donw" : "up"
          }
        >
          1
        </motion.div>
        <motion.div
          className="h-screen w-screen bg-red-400 absolute top-0"
          variants={mainBoxVariants}
          animate={
            pageRef.current === 0 ? "open" : pageRef.current < 0 ? "null" : "up"
          }
        >
          0
        </motion.div>
      </div>
    </Layout>
  );
}
