import { Inter } from "@next/font/google";
import Layout from "../components/layout";
import { AnimatePresence, motion, Variants } from "framer-motion";
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
      duration: 1,
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

  const pageRef = useRef(0);
  const enableRef = useRef(true);
  const TOTAL_PAGE = 5;

  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("wheel", (e) => changePage(e));

    function changePage(e: WheelEvent) {
      if (enableRef.current) {
        if (
          e.deltaY >= 0 &&
          e.deltaY <= 30 &&
          pageRef.current < TOTAL_PAGE - 1
        ) {
          pageRef.current += 1;
          setPage(page + 1);

          console.log(pageRef.current);

          setTimeout(() => {
            enableRef.current = true;
            console.log("페이지 넘길 수 있음");
          }, 500);

          enableRef.current = false;
        }
        if (e.deltaY <= 0 && e.deltaY >= -30 && pageRef.current > 0) {
          pageRef.current -= 1;
          setPage(page - 1);
          console.log(pageRef.current);

          setTimeout(() => {
            enableRef.current = true;
            console.log("페이지 넘길 수 있음");
          }, 1000);
          enableRef.current = false;
        }
      }
    }
  }, [pageRef.current, page]);

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
        <AnimatePresence custom={page}>
          <motion.div
            key="4"
            className="h-full w-full bg-yellow-300 absolute top-0"
            variants={mainBoxVariants}
            animate={
              pageRef.current === 4
                ? "open"
                : pageRef.current < 4
                ? "down"
                : "up"
            }
          >
            4
          </motion.div>
          <motion.div
            key="3"
            className="h-full w-full bg-slate-400 absolute top-0"
            variants={mainBoxVariants}
            animate={
              pageRef.current === 3
                ? "open"
                : pageRef.current < 3
                ? "down"
                : "up"
            }
          >
            3
          </motion.div>
          <motion.div
            key="2"
            className="h-full w-full bg-green-400 absolute top-0"
            variants={mainBoxVariants}
            animate={
              pageRef.current === 2
                ? "open"
                : pageRef.current < 2
                ? "down"
                : "up"
            }
          >
            2
          </motion.div>
          <motion.div
            key="1"
            className="h-full w-full bg-blue-400 absolute top-0"
            variants={mainBoxVariants}
            animate={
              pageRef.current === 1
                ? "open"
                : pageRef.current < 1
                ? "donw"
                : "up"
            }
          >
            1
          </motion.div>
          <motion.div
            key="0"
            className="h-screen w-screen bg-red-400 absolute top-0"
            variants={mainBoxVariants}
            animate={
              pageRef.current === 0
                ? "open"
                : pageRef.current < 0
                ? "null"
                : "up"
            }
          >
            0
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}
