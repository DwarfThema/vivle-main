import Image from "next/image";
import VideoBackground from "../VideoBackground";
import Logo_CultureOrg from "../../public/images/Extral_Logos/Logo_CurtuleOrg.png";
import Logo_ArkoOrg from "../../public/images/Extral_Logos/Logo_ArkoOrg.png";
import Link from "next/link";
import { useState } from "react";

interface ContentsProps {
  onMainLoading?: () => void;
}
const Content_EBS: React.FC<ContentsProps> = ({ onMainLoading }) => {
  return (
    <div className="bg-main-base w-screen h-screen flex justify-center lg:items-center md:items-end sm:items-end   no-drag">
      <VideoBackground src="/videos/EBS_Web.mp4" onLoaded={onMainLoading} />
      <div className="w-full h-screen absolute md:bg-gradient-to-r sm:bg-gradient-to-t from-blackOpa via-blackNext  to-transparent no-drag" />
      {/* 본문 */}
      <div className="z-10 w-10/12 lg:mb-0 md:mb-[100px] sm:mb-[110px] text-white">
        <div className="flex items-center"></div>
        <div>
          <div className="md:text-xl md:mt-2 sm:text-sm sm:mt-0 font-light mt-2">
            EBS 다큐프라임 ‘게임에 진심인 편’
          </div>
          <div className="md:text-8xl sm:text-3xl font-semibold ">
            게임 미술관
          </div>
        </div>
        <div className="lg:w-[782px] md:w-fit  height650:hidden  lg:mt-7 md:mt-3 md:block sm:hidden ">
          <div className="text-base font-extralight">
            {`EBS 다큐프라임 ‘게임에 진심인 편’ 3부작은 ‘게임이 뉴노멀이 된 시대, 게임의 본질과 가치를 짚어보는 다큐멘터리’, ‘게임의 형식을 빌려 게임을 파헤쳐보는 MZ세대 향의 젊은 다큐멘터리’입니다. 그 중 3부는 ‘게임은 예술인가 아닌가? 혹은 다른 무엇인가?’라는 주제로 실시간 인터넷 방송 컨셉을 차용해 유명 게임 스트리머 침착맨이 방송에서 게임과 예술에 관해 시청자들과 함께 논쟁을 벌이며 진행됩니다.`}
          </div>
          <div className="mt-7 font-semibold text-xl lg:block md:hidden height750:hidden"></div>
          <div className="mt-1 lg:block md:hidden height750:hidden">
            {`비블파크는 ‘게임에 진심인 편’ 2부 VR 인터뷰 월드와 3부 3D 미술관을 제작하였습니다.`}
          </div>
        </div>
        <div className="lg:mt-7 md:mt-0 sm:mt-0">
          <div className="lg:block md:hidden sm:hidden">
            하단 링크를 선택해 ‘게임 미술관’의 콘텐츠를 즐겨보세요!
          </div>
          <div className="lg:mt-3 md:mt-3 sm:mt-2 flex ">
            <Link legacyBehavior href="https://www.ebsgamedocu.co.kr/">
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

export default Content_EBS;
