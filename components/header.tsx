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
      <header className={`fixed top-5 z-20 w-full  `}>
        <div className="flex items-center px-6 py-6 xl:px-24 ">
          <Image
            src={WhiteLogo}
            width={230}
            alt="VivlePark"
            className="max-h-10 h-auto no-drag"
          />
        </div>
        <div className="ml-auto flex justify-center lg:hidden">
          <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent  dark:hover:text-accent  flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
            <Link legacyBehavior href="https://open.kakao.com/me/Vivlepark">
              <a id="link" target="_blank">
                <span>Contact</span>
              </a>
            </Link>
          </button>
        </div>
      </header>
      <div className="ml-auto flex justify-center lg:hidden">
        <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent  dark:hover:text-accent  flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
          <Link legacyBehavior href="https://open.kakao.com/me/Vivlepark">
            <a id="link" target="_blank">
              <span>Contact</span>
            </a>
          </Link>
          <i className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="h-4 w-4 dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          </i>
        </button>
      </div>
    </>
  );
};

export default Header;
