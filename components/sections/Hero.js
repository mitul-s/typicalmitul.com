import NextImage from "next/image";

let us3 =
  "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147142/Typical%20Mitul/Test/IMG_1448_mjrtnf.jpg";

const Hero = () => {
  return (
    <div className="grid h-full rounded-lg shadow bg-yolk ring-2 ring-offset-4 ring-yolk shadow-yolk isolate">
      <div className="h-full p-0.5 content">
        <div className="relative h-full p-1 overflow-hidden rounded-lg">
          <NextImage
            src={us3}
            alt="me"
            layout="fill"
            objectFit="cover"
            className="brightness-50 saturate-75"
          />
          {/* <div className="h-full rounded-sm bg-gray-300 border border-[#cbd6e0]"></div> */}
        </div>
      </div>
      <h2 className="hero-heading flex justify-center items-center overlay text-5xl md:text-[72px] font-[900] leading-none tracking-tighter -mt-4 z-10">
        CHASING LIFE
      </h2>
    </div>
  );
};

export default Hero;