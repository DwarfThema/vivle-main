import Head from "next/head";

interface IHeadProps {
  keyword: string;
  desc: string;
}

const Meta = ({ keyword, desc }: IHeadProps) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
        <meta content="//www.VIVLEPARK.com/" property="og:url" />
        <meta content="/apple-touch-icon-114x114a.png" property="og:image" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta
          name="naver-site-verification"
          content="9df6b1efcfb6d871812a2f38381af8b288e82262"
        />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "VIVLEPARK || 비블파크",
  keyword:
    "비블파크, 비블 파크, 비블, 파크, unity, 유니티, 유니티 외주, vrchat, 브이알챗, vrchat 외주, 브이알챗 외주, vrchat 맵 제작, vrchat 캐릭터 제작, 버츄얼 아바타 제작, 웹지엘, 웹지엘 외주, WebGL, WebGL 외주, WebGPU, WebGPU 외주, 메타버스, 메타버스 외주, 메타버스 맵, 메타버스 맵 제작, 매타버스 맵 제작 외주, 메타버스 콘텐츠 제작, 메타버스 캐릭터",
  desc: "메타버스 공간 제작 전문기업 비블파크입니다. 비블파크는 다양한 Unity, WEB기반 3D 메타버스 제작을 전문적으로 기획 및 제작하는 업체입니다. 그 외 다양한 XR 콘텐츠, 온라인 미디어 콘텐츠를 자체 제작합니다. VivlePark is a company specializing in metaverse space production. VivlePark is a company that specializes in planning and producing various Unity and WEB-based 3D metaverse production. In addition, we produce various XR contents and online media contents on our own.",
};

export default Meta;
