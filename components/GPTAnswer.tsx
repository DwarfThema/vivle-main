// pages/index.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IndexPage1 = () => {
  const [visibleDiv, setVisibleDiv] = useState("A");
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = (event: React.WheelEvent) => {
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

  const transition = {
    type: "tween",
    duration: 1,
    ease: "easeInOut",
  };

  const divs = [
    { key: "A", color: "bg-red-500", content: "1" },
    { key: "B", color: "bg-blue-500", content: "2" },
    { key: "C", color: "bg-green-500", content: "3" },
    { key: "D", color: "bg-yellow-500", content: "4" },
  ];

  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      onWheel={handleWheel}
    >
      <AnimatePresence>
        {divs.map((div) => (
          <motion.div
            key={div.key}
            className={`w-full h-screen ${div.color} flex justify-center items-center absolute top-0 left-0`}
            initial={{ y: div.key === "A" ? "0%" : "100%" }}
            animate={{ y: visibleDiv === div.key ? "0%" : "100%" }}
            exit={{ y: "-100%" }}
            transition={transition}
          >
            <h1>{div.content}</h1>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default IndexPage1;
