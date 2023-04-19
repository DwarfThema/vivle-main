import { motion } from "framer-motion";
import { useRef } from "react";

import { RefObject, useEffect, useState } from "react";

function UseFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };
    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}

const PointerFollower = () => {
  const mouseFollower = useRef(null);
  const { x, y } = UseFollowPointer(mouseFollower);
  return (
    <>
      <motion.div
        ref={mouseFollower}
        className=" h-6 w-6 absolute rounded-full xl:border-red-300 border-dotted xl:border-2 lg:border-0 z-20 pointer-events-none"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 400,
        }}
      />
    </>
  );
};

export default PointerFollower;
