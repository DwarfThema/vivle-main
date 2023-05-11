import Image from "next/image";
import VideoBackground from "../VideoBackground";
import Logo_CultureOrg from "../../public/images/Extral_Logos/Logo_CurtuleOrg.png";
import Link from "next/link";

const Content_1 = () => {
  return (
    <div className="bg-main-base w-screen h-screen flex justify-center items-center   no-drag">
      <VideoBackground src="/videos/MooonRabbit_Web.mp4" />
      <div className="w-full h-full absolute bg-gradient-to-r from-blackOpa via-blackNext  to-transparent" />
      <div className="z-10 w-10/12 h-[50%]  text-white">
        {/* 본문 */}
        <div>
          <Image
            src={Logo_CultureOrg}
            alt="SupporterLogo"
            className="h-fit lg:w-[300px] md:w-[300px] sm:w-[0px] no-drag "
          />
        </div>
        <div>
          <div className="text-xl font-light mt-2">
            2023 메타버스 콘텐츠 아이디어 우수사례 선정
          </div>
          <div className="text-8xl font-semibold ">THE MOON RABBIT</div>
        </div>
        <div className="md:w-[782px] mt-7">
          <div className="text-lg font-extralight">
            2023년 `토끼의 해`를 기념한 메타버스 콘텐츠입니다. 메타버스 플랫폼
            VRChat을 이용한 2개의 월드로 구성하였습니다. 스토리 월드에서는
            한국의 정월대보름 문화 `달집태우기`와 `달토끼 전설`을 주제로 한
            이야기를 즐길 수 있으며, 로비 월드에서는 연날리기, 딱지치기 등의
            다양한 전통문화를 체험할 수 있습니다.
          </div>
          <div className="mt-7 font-semibold text-xl">SYNOPSYS</div>
          <div className="mt-1">
            절망에 빠진 세상, 움직일 수 없는 사람들 사이에서 체험자는 유일하게
            움직일 수 있는 사람이 되어 달토끼와 함께 세상을 구합니다.
            달집태우기를 완성하고 소원을 비는 과정을 통해 체험자로 하여금
            자아효능감을 느끼고 잊고 있던 자신의 소망을 떠올릴 수 있는 계기를
            마련하고자 하였습니다.
          </div>
        </div>
        <div className="mt-7">
          <div>
            하단 링크를 선택해 달토끼와 함께 절망에 빠진 세상을 구해주세요!
          </div>
          <div className="mt-3 flex">
            <Link
              legacyBehavior
              href="https://vrchat.com/home/launch?worldId=wrld_65a4deb0-1313-4c54-aeb6-161c91bd9795"
            >
              <a id="link" target="_blank" className="">
                <button className="w-[150px] h-[50px] bg-white bg-opacity-60 border-2 rounded-3xl font-bold text-center">
                  STORY WORLD
                </button>
              </a>
            </Link>
            <Link legacyBehavior href="https://youtu.be/TUyd61nuCjo">
              <a id="link" target="_blank">
                <button className="w-[140px] h-[50px] bg-white bg-opacity-30 border-2 rounded-3xl font-bold ml-4 text-center">
                  FULL VIDEO
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content_1;
