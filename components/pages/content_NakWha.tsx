import Image from "next/image";
import VideoBackground from "../VideoBackground";
import Logo_CultureOrg from "../../public/images/Extral_Logos/Logo_CurtuleOrg.png";
import Logo_ArkoOrg from "../../public/images/Extral_Logos/Logo_ArkoOrg.png";
import Link from "next/link";
import { useState } from "react";

interface ContentsProps {
  onMainLoading?: () => void;
}
const Content_NakWha: React.FC<ContentsProps> = ({ onMainLoading }) => {
  return (
    <div className="bg-main-base w-screen h-screen flex justify-center lg:items-center md:items-end sm:items-end   no-drag">
      <VideoBackground src="/videos/Nakhwa_Web.mp4" onLoaded={onMainLoading} />
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
            2023 메타버스 예술활동 지원사업 선정작
          </div>
          <div className="md:text-8xl sm:text-3xl font-semibold ">NAKHWA</div>
        </div>
        <div className="lg:w-[782px] md:w-fit  height650:hidden  lg:mt-7 md:mt-3 md:block sm:hidden ">
          <div className="text-base font-extralight">
            {`VR 이머시브 연극 <낙화>는 한국 전통문화인 ‘낙화놀이’와 ‘불안‘을 소재로 창작한 은유적 이야기입니다.
향유자는 가상세계에서 ’낙화놀이‘를 수행하는 어린 소년이 되어 소년이 느끼는 긴장과 불안, 안정의 과정을 경험합니다. 이 과정에서 향유자는 불안을 다루는 방식을 체화하며, 이후 VR 기기를 벗고 다시 현실로 돌아갔을 때 자신의 불안 또한 적절히 다뤄내며 현재의 아름다움을 누릴 수 있는 계기를 마련합니다.`}
          </div>
          <div className="mt-7 font-semibold text-xl lg:block md:hidden height750:hidden">
            SYNOPSYS
          </div>
          <div className="mt-1 lg:block md:hidden height750:hidden">
            {`늦봄의 마을 축제, 낙화놀이가 진행되는 동안 소년은 항상 집에 혼자 남아있었다. 그 이유는 바로 호수에 사는 거대한 물고기에 대한 두려움과 불안. 어느 날, 소녀가 나타나 소년을 호수로 이끌지만 소년은 패닉상태에 빠진다. 무의식 속으로 떨어진 소년은 불의 도움을 받아 두려움과 불안을 벗어나는 방법을 찾는다. 
과연 소년은 불안을 이겨내고 낙화놀이의 아름다움을 느낄 수 있을까?`}
          </div>
        </div>
        <div className="lg:mt-7 md:mt-0 sm:mt-0">
          <div className="lg:block md:hidden sm:hidden">
            하단 링크를 선택해 ‘낙화’의 모든 콘텐츠를 즐겨보세요!
          </div>
          <div className="lg:mt-3 md:mt-3 sm:mt-2 flex ">
            <Link legacyBehavior href="https://youtu.be/DnubQrhnsQ8">
              <a id="link" target="_blank" className="lg:block ">
                <button className="md:w-[140px] md:h-[50px] lg:ml-0 md:text-base sm:w-[100px] sm:h-[30px] sm:ml-0 sm:text-xs  bg-white bg-opacity-30 border-2 rounded-3xl font-bold text-center ">
                  FULL VIDEO
                </button>
              </a>
            </Link>
            <Link legacyBehavior href="https://vrch.at/mr3te92c">
              <a
                id="link"
                target="_blank"
                className="lg:block md:hidden sm:hidden"
              >
                <button className="w-[150px] h-[50px] bg-white lg:ml-4 bg-opacity-60 border-2 rounded-3xl font-bold text-center">
                  VRChat WORLD
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

export default Content_NakWha;
