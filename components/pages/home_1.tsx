import Image from "next/image";
import logo_double_wt from "../../public/images/logo_double_wt.png";
import { motion } from "framer-motion";
import vivleparkLogo from "../../public/apple-touch-icon-114x114a.png";

const Home_1 = () => {
  return (
    <>
      <div className="bg-main-base w-screen h-screen flex justify-center items-center  no-drag">
        <div className="lg:w-[1100px] md:w-[650px] sm:w-[350px]  no-drag">
          <Image
            className=" no-drag"
            alt="VivlePark Main"
            src={logo_double_wt}
          />
          <Image
            src={vivleparkLogo}
            alt="VivlePark Logo"
            className="h-fit w-[0px] sm:w-[0px] no-drag "
            priority
          />
        </div>
        <motion.div
          className={`z-10 bg-[#fffa65] h-7 w-7 mt-[200px] lg:mt-[150px] 
          md:h-5 md:w-5 md:mt-[100px]
          sm:h-2 sm:w-2 sm:mt-[40px]
          `}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
      </div>
    </>
  );
};

export default Home_1;
