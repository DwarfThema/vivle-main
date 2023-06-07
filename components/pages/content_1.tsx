import Image from "next/image";
import VideoBackground from "../VideoBackground";
import Logo_CultureOrg from "../../public/images/Extral_Logos/Logo_CurtuleOrg.png";
import Link from "next/link";
import { useState } from "react";

interface ContentsProps {
  onMainLoading?: () => void;
}
const Content_1: React.FC<ContentsProps> = ({ onMainLoading }) => {
  console.log(onMainLoading);

  return (
    <div className="bg-main-base w-screen h-screen flex justify-center lg:items-center md:items-end sm:items-end   no-drag">
      <VideoBackground
        src="/videos/MooonRabbit_Web.mp4"
        onLoaded={onMainLoading}
      />
      <div className="w-full h-screen absolute md:bg-gradient-to-r sm:bg-gradient-to-t from-blackOpa via-blackNext  to-transparent no-drag" />
      {/* 본문 */}
      <div className="z-10 w-10/12 lg:mb-0 md:mb-[100px]  sm:mb-[110px] text-white">
        <div>
          <Image
            src={Logo_CultureOrg}
            alt="SupporterLogo"
            className="h-fit lg:w-[300px] md:w-[300px] sm:w-[150px] no-drag"
          />
        </div>
        <div>
          <div className="md:text-xl md:mt-2 sm:text-sm sm:mt-0 font-light mt-2">
            2023 메타버스 콘텐츠 아이디어 우수사례 선정
          </div>
          <div className="md:text-8xl sm:text-3xl font-semibold ">
            THE MOON RABBIT
          </div>
        </div>
        <div className="lg:w-[782px] md:w-fit  height650:hidden  lg:mt-7 md:mt-3 md:block sm:hidden ">
          <div className="text-base font-extralight">
            2023년 `토끼의 해`를 기념한 메타버스 콘텐츠입니다. 메타버스 플랫폼
            VRChat을 이용한 2개의 월드로 구성하였습니다. 스토리 월드에서는
            한국의 정월대보름 문화 `달집태우기`와 `달토끼 전설`을 주제로 한
            이야기를 즐길 수 있으며, 로비 월드에서는 연날리기, 딱지치기 등의
            다양한 전통문화를 체험할 수 있습니다.
          </div>
          <div className="mt-7 font-semibold text-xl lg:block md:hidden height750:hidden">
            SYNOPSYS
          </div>
          <div className="mt-1 lg:block md:hidden height750:hidden">
            절망에 빠진 세상, 움직일 수 없는 사람들 사이에서 체험자는 유일하게
            움직일 수 있는 사람이 되어 달토끼와 함께 세상을 구합니다.
            달집태우기를 완성하고 소원을 비는 과정을 통해 체험자로 하여금
            자아효능감을 느끼고 잊고 있던 자신의 소망을 떠올릴 수 있는 계기를
            마련하고자 하였습니다.
          </div>
        </div>
        <div className="lg:mt-7 md:mt-0 sm:mt-0">
          <div className="lg:block md:hidden sm:hidden">
            하단 링크를 선택해 달토끼와 함께 절망에 빠진 세상을 구해주세요!
          </div>
          <div className="lg:mt-3 md:mt-3 sm:mt-2 flex ">
            <Link
              legacyBehavior
              href="https://vrchat.com/home/launch?worldId=wrld_65a4deb0-1313-4c54-aeb6-161c91bd9795"
            >
              <a
                id="link"
                target="_blank"
                className="lg:block md:hidden sm:hidden"
              >
                <button className="w-[150px] h-[50px] bg-white bg-opacity-60 border-2 rounded-3xl font-bold text-center">
                  STORY WORLD
                </button>
              </a>
            </Link>
            <Link legacyBehavior href="https://youtu.be/TUyd61nuCjo">
              <a id="link" target="_blank">
                <button className="md:w-[140px] md:h-[50px] lg:ml-4 md:text-base   sm:w-[100px] sm:h-[30px] sm:ml-0 sm:text-xs  bg-white bg-opacity-30 border-2 rounded-3xl font-bold text-center ">
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

export default Content_1;
