import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const LoadingPage = () => {
  return (
    <>
      <div className="bg-main-base w-screen h-screen flex justify-center items-center flex-col  no-drag">
        <svg
          width="50px"
          height="50px"
          display="inline-block"
          version="1.1"
          id="L2"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
        >
          <circle
            fill="none"
            stroke="#fff"
            strokeWidth="5"
            strokeMiterlimit="10"
            cx="50"
            cy="50"
            r="48"
          />
          <line
            fill="none"
            strokeLinecap="round"
            stroke="#fff"
            strokeWidth="5"
            strokeMiterlimit="10"
            x1="50"
            y1="50"
            x2="85"
            y2="50.5"
          >
            <animateTransform
              attributeName="transform"
              dur="2s"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </line>
          <line
            fill="none"
            strokeLinecap="round"
            stroke="#fff"
            strokeWidth="5"
            strokeMiterlimit="10"
            x1="50"
            y1="50"
            x2="49.5"
            y2="74"
          >
            <animateTransform
              attributeName="transform"
              dur="15s"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </line>
        </svg>
        <div className="flex text-center text-white text-opacity-70 mt-6">
          로딩중입니다. <br />
          PC환경에서 접속을 권장합니다.
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
