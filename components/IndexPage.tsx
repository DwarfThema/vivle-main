import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home_1 from "./pages/home_1";

const IndexPage = () => {
  const [visibleDiv, setVisibleDiv] = useState("A");
  const [isScrolling, setIsScrolling] = useState(false);

  const handleClickDown = () => {
    if (visibleDiv === "A") setVisibleDiv("B");
    else if (visibleDiv === "B") setVisibleDiv("C");
    else if (visibleDiv === "C") setVisibleDiv("D");
  };

  const handleClickUp = () => {
    if (visibleDiv === "D") setVisibleDiv("C");
    else if (visibleDiv === "C") setVisibleDiv("B");
    else if (visibleDiv === "B") setVisibleDiv("A");
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (isScrolling) return;
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);

    if (event.deltaY > 0) {
      if (visibleDiv === "A") setVisibleDiv("B");
      else if (visibleDiv === "B") setVisibleDiv("C");
      else if (visibleDiv === "C") setVisibleDiv("D");
    } else {
      if (visibleDiv === "D") setVisibleDiv("C");
      else if (visibleDiv === "C") setVisibleDiv("B");
      else if (visibleDiv === "B") setVisibleDiv("A");
    }
  };

  useEffect(() => {
    const wheelListener = (event: WheelEvent) => {
      handleWheel(event as any);
    };
    window.addEventListener("wheel", wheelListener, { passive: false });

    return () => {
      window.removeEventListener("wheel", wheelListener);
    };
  }, [handleWheel]);

  const transition = {
    type: "tween",
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      onWheel={handleWheel}
    >
      <AnimatePresence>
        <motion.div
          key="A"
          className="w-full h-screen bg-red-500 flex justify-center items-center absolute top-0 left-0"
          initial={{ y: "0%" }}
          animate={{ y: visibleDiv === "A" ? "0%" : "-100%" }}
          transition={transition}
        >
          <Home_1 />
        </motion.div>
        <motion.div
          key="B"
          className="w-full h-screen bg-blue-500 flex justify-center items-center absolute top-0 left-0"
          initial={{ y: "100%" }}
          animate={{
            y:
              visibleDiv === "B" ? "0%" : visibleDiv === "C" ? "-100%" : "100%",
          }}
          transition={transition}
        >
          <h1>2</h1>
        </motion.div>
        <motion.div
          key="C"
          className="w-full h-screen bg-green-500 flex justify-center items-center absolute top-0 left-0"
          initial={{ y: "100%" }}
          animate={{
            y:
              visibleDiv === "C" ? "0%" : visibleDiv === "D" ? "-100%" : "100%",
          }}
          transition={transition}
        >
          <h1>3</h1>
        </motion.div>
        <motion.div
          key="D"
          className="w-full h-screen bg-yellow-500 flex justify-center items-center absolute top-0 left-0"
          initial={{ y: "100%" }}
          animate={{ y: visibleDiv === "D" ? "0%" : "100%" }}
          transition={transition}
        >
          <h1>4</h1>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-16 left-16 flex z-20">
        <button onClick={handleClickDown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 30"
            strokeWidth="2"
            stroke="white"
            className="w-16 h-12 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <button onClick={handleClickUp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 30"
            strokeWidth="2"
            stroke="white"
            className="w-16 h-12 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
