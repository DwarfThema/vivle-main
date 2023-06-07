import Image from "next/image";
import VideoBackground from "../VideoBackground";
import Logo_CultureOrg from "../../public/images/Extral_Logos/Logo_CurtuleOrg.png";
import Link from "next/link";
import { useState } from "react";

interface ContentsProps {
  onMainLoading?: () => void;
}
const Content_2: React.FC<ContentsProps> = ({ onMainLoading }) => {
  return (
    <div className="bg-main-base w-screen h-screen flex justify-center lg:items-center md:items-end sm:items-end   no-drag">
      <VideoBackground
        src="/videos/ModernRoom_Web.mp4"
        onLoaded={onMainLoading}
      />
      <div className="w-full h-screen absolute md:bg-gradient-to-r sm:bg-gradient-to-t from-blackOpa via-blackNext  to-transparent no-drag" />
      {/* 본문 */}
      <div className="z-10 w-10/12 lg:mb-0 md:mb-[100px]  sm:mb-[110px] text-white">
        <div></div>
        <div>
          <div className="md:text-xl md:mt-2 sm:text-sm sm:mt-0 font-light mt-2">
            2021 버추얼 인플루언서 튜토리얼 콘텐츠
          </div>
          <div className="md:text-8xl sm:text-3xl font-semibold ">
            Modern Room
          </div>
        </div>
        <div className="lg:w-[782px] md:w-fit  height650:hidden  lg:mt-7 md:mt-3 md:block sm:hidden ">
          <div className="text-lg font-extralight">
            2021 `Modern Room`은 버츄얼 인플루언서 방 콘셉트로 만든 VRChat 기반
            월드 맵입니다. 해당 월드를 통해 버츄얼 크리에이터 `김피클`의 다양한
            튜토리얼 콘텐츠 진행에 몰입감을 더해줄 수 있는 요소를 더해
            인테리어를 구성했습니다. 앞으로도 피클이의 다양한 튜토리얼 콘텐츠를
            기대해주세요.
          </div>
        </div>
        <div className="lg:mt-3 md:mt-0 sm:mt-0">
          <div className="lg:block md:hidden sm:hidden">
            하단 링크를 선택해 튜토리얼 콘텐츠를 즐겨주세요
          </div>
          <div className="lg:mt-3 md:mt-3 sm:mt-2 flex ">
            <Link legacyBehavior href="https://youtu.be/J017vwQd2KA">
              <a id="link" target="_blank">
                <button className="md:w-[140px] md:h-[50px]  md:text-base   sm:w-[100px] sm:h-[30px] sm:ml-0 sm:text-xs  bg-white bg-opacity-30 border-2 rounded-3xl font-bold text-center ">
                  FULL VIDEO
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* 본문 끝 */}
    </div>
  );
};

export default Content_2;
