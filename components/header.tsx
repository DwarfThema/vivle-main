import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo_double_wt.png";
import WhiteLogo from "../public/images/logo_single.png";

const scrollDownEvent = (height: number) => {
  console.log(height);
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  }
};

const Header = () => {
  const [isScroll, setScroll] = useState(false);

  return (
    <>
      <header
        className={`fixed top-9 z-20 w-full flex items-center lg:px-24 md:px-16 sm:px-5`}
      >
        <div className="absolute flex items-center">
          <Image
            src={WhiteLogo}
            alt="VivlePark"
            className="max-h-10 max-w-fit sm:max-h-6 sm: no-drag "
          />
        </div>
        <div className="flex justify-end z-20 w-full  text-xl  ">
          <Link legacyBehavior href="https://open.kakao.com/me/Vivlepark">
            <a id="link" target="_blank" className="">
              <div className="text-white font-bold sm:text-base bg-black bg-opacity-25 px-2 py-[2px] rounded-lg">
                Contact
              </div>
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
