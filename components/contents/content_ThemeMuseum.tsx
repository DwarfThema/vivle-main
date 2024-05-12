import Image from "next/image";
import VideoBackground from "../VideoBackground";
import Logo_CultureOrg from "../../public/images/Extral_Logos/Logo_CurtuleOrg.png";
import Logo_ArkoOrg from "../../public/images/Extral_Logos/Logo_ArkoOrg.png";
import Link from "next/link";
import { useState } from "react";

interface ContentsProps {
  onMainLoading?: () => void;
}
const Content_ThemeMuseum: React.FC<ContentsProps> = ({ onMainLoading }) => {
  return (
    <div className="bg-main-base w-screen h-screen flex justify-center lg:items-center md:items-end sm:items-end   no-drag">
      <VideoBackground
        src="/videos/ThemeMuseum_Web.mp4"
        onLoaded={onMainLoading}
      />
      <div className="w-full h-screen absolute md:bg-gradient-to-r sm:bg-gradient-to-t from-blackOpa via-blackNext  to-transparent no-drag" />
      {/* 본문 */}
      <div className="z-10 w-10/12 lg:mb-0 md:mb-[100px] sm:mb-[110px] text-white">
        <div className="flex items-center">
          <Image
            src={Logo_CultureOrg}
            alt="SupporterLogo"
            className="h-fit lg:w-[300px] md:w-[300px] sm:w-[150px] no-drag"
          />

          <Image
            src={Logo_ArkoOrg}
            alt="SupporterLogo"
            className="h-fit lg:w-[300px] md:w-[300px] sm:w-[150px] mx-3 no-drag"
          />
        </div>
        <div>
          <div className="md:text-xl md:mt-2 sm:text-sm sm:mt-0 font-light mt-2">
            2023 온라인 미디어 예술활동 선정작
          </div>
          <div className="md:text-8xl sm:text-3xl font-semibold ">띰뮤지엄</div>
        </div>
        <div className="lg:w-[782px] md:w-fit  height650:hidden  lg:mt-7 md:mt-3 md:block sm:hidden ">
          <div className="text-base font-extralight">
            {`띰뮤지엄은 다양한 아티스트의 개성 넘치는 작품을 온라인으로 쉽게 즐길 수 있는 플랫폼입니다.
2023년 4명의 신진 예술인의 작품을 몰입감 넘치는 Interactive Web Art로 전환해 작품에 가치를 더하는 프로젝트를 진행하였습니다.`}
          </div>
          <div className="mt-7 font-semibold text-xl lg:block md:hidden height750:hidden"></div>
          <div className="mt-1 lg:block md:hidden height750:hidden">
            {`Digital forming은 기존 Static 작품에 Digital 기술을 더해 생동감을 더하는 활동을 말합니다. 띰뮤지엄은 평면, 입체예술, 공예, 시각, 산업, 공간디자인 등 다양한 분야의 아티스트와 협업하고, 그들의 작품 스타일에 최적화된 도메인을 만들어 예술활동을 서포트한다. 웹 전시뿐만 아니라, 매해 시즌에 맞춰 오프라인 전시 및 팝업스토어를 개최하며, 펀딩활동을 통해 작품의 특성에 맞는 제품을 제작 및 유통해 신진 예술인의 자생력을 제고한다.`}
          </div>
        </div>
        <div className="lg:mt-7 md:mt-0 sm:mt-0">
          <div className="lg:block md:hidden sm:hidden">
            하단 링크를 선택해 ‘띰뮤지엄’의 모든 콘텐츠를 즐겨보세요!
          </div>
          <div className="lg:mt-3 md:mt-3 sm:mt-2 flex ">
            <Link legacyBehavior href="https://www.theme-museum.com">
              <a id="link" target="_blank" className="lg:block ">
                <button className="md:w-[140px] md:h-[50px] lg:ml-0 md:text-base sm:w-[100px] sm:h-[30px] sm:ml-0 sm:text-xs  bg-white bg-opacity-30 border-2 rounded-3xl font-bold text-center ">
                  ENTER
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

export default Content_ThemeMuseum;
