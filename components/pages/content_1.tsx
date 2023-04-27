import VideoBackground from "../VideoBackground";

const Content_1 = () => {
  return (
    <>
      <VideoBackground src="/videos/MooonRabbit_Web.mp4" />
      {/* Add your text and other content here */}
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        Your Text Here
      </h1>
    </>
  );
};

export default Content_1;
