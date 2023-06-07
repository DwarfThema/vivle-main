import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home_1 from "./pages/home_1";
import Content_1 from "./pages/content_1";
import LoadingPage from "./pages/loading";
import Content_2 from "./pages/content_2";

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  const [visibleDiv, setVisibleDiv] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mouseDownY, setMouseDownY] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState(0);

  const handleVideoLoaded = () => {
    setLoading(false);
    console.log("on");
  };

  // mouse Click event
  const handleClickDown = () => {
    if (isScrolling) return;
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);

    if (visibleDiv === 0) setVisibleDiv(1);
    else if (visibleDiv === 1) setVisibleDiv(2);
    else if (visibleDiv === 2) setVisibleDiv(1);
  };

  const handleClickUp = () => {
    if (visibleDiv === 4) setVisibleDiv(3);
    else if (visibleDiv === 3) setVisibleDiv(2);
    else if (visibleDiv === 2) setVisibleDiv(1);
    else if (visibleDiv === 1) setVisibleDiv(0);
  };

  // wheel Event
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);

    if (event.deltaY > 0) {
      if (visibleDiv === 0) setVisibleDiv(1);
      else if (visibleDiv === 1) setVisibleDiv(2);
    } else {
      if (visibleDiv === 1) setVisibleDiv(0);
      else if (visibleDiv === 2) setVisibleDiv(1);
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

  // drag n drop Event (desktop / mobile)

  const handleMouseDown = (event: React.MouseEvent) => {
    setMouseDownY(event.clientY);
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    handleDrag(event.clientY);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setMouseDownY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (event.changedTouches.length > 0) {
      handleDrag(event.changedTouches[0].clientY);
    }
  };

  const handleDrag = (endY: number) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);
    if (mouseDownY === null) return;
    const deltaY = endY - mouseDownY;
    setMouseDownY(null);

    if (Math.abs(deltaY) < 50) return; // threshold for minimal drag distance

    if (deltaY > 0) {
      if (visibleDiv === 1) setVisibleDiv(0);
      else if (visibleDiv === 2) setVisibleDiv(1);
    } else {
      if (visibleDiv === 0) setVisibleDiv(1);
      else if (visibleDiv === 1) setVisibleDiv(2);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (mouseDownY === null) return;
    const deltaY = event.clientY - mouseDownY;
    setDragDistance(deltaY);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (mouseDownY === null) return;
    const deltaY = event.touches[0].clientY - mouseDownY;
    setDragDistance(deltaY);
  };

  useEffect(() => {
    if (mouseDownY === null) {
      setDragDistance(0);
    }
  }, [mouseDownY]);

  const transition = {
    type: "tween",
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <div className="bg-main-base">
      <div
        className="relative w-screen h-screen overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onWheel={handleWheel}
      >
        <AnimatePresence>
          <motion.div
            key="0"
            className="w-full h-screen bg-red-500 flex justify-center items-center absolute top-0 left-0"
            initial={{ y: "0%" }}
            animate={{
              y: visibleDiv === 0 ? "0%" : visibleDiv > 0 ? "-100%" : "-100%",
            }}
            transition={transition}
          >
            <Home_1 />
          </motion.div>
          <motion.div
            key="1"
            className="w-full h-screen bg-blue-500 flex justify-center items-center absolute top-0 left-0"
            initial={{ y: "100%" }}
            animate={{
              y: visibleDiv === 1 ? "0%" : visibleDiv > 1 ? "-100%" : "100%",
            }}
            transition={transition}
          >
            {loading && (
              <div className="inset-0 absolute flex items-center justify-center z-40 bg-white w-screen h-full">
                <LoadingPage />
              </div>
            )}
            <Content_1 onMainLoading={handleVideoLoaded} />
          </motion.div>
          <motion.div
            key="2"
            className="w-full h-screen bg-blue-500 flex justify-center items-center absolute top-0 left-0"
            initial={{ y: "100%" }}
            animate={{
              y: visibleDiv === 2 ? "0%" : visibleDiv > 2 ? "-100%" : "100%",
            }}
            transition={transition}
          >
            {loading && (
              <div className="inset-0 absolute flex items-center justify-center z-40 bg-white w-screen h-full">
                <LoadingPage />
              </div>
            )}
            <Content_2 />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 w-screen flex justify-center z-20">
        <button onClick={handleClickDown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            strokeWidth="2"
            stroke="white"
            className="w-10 h-10 block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
