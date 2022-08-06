import NextImage from "next/image";

let us3 =
  "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147142/Typical%20Mitul/Test/IMG_1448_mjrtnf.jpg";

const Hero = () => {
  return (
    <div className="grid h-full rounded-lg sm:shadow sm:bg-yolk sm:ring-2 ring-offset-4 ring-yolk shadow-yolk isolate">
      <div className="h-full sm:p-0.5 content">
        <div className="relative h-full p-1 overflow-hidden rounded-lg">
          <NextImage
            src={us3}
            alt="me"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          {/* <div className="h-full rounded-sm bg-gray-300 border border-[#cbd6e0]"></div> */}
        </div>
      </div>
      <h2 className="font-medium text-white flex justify-center text-center items-center overlay text-4xl md:text-[72px] leading-none -mt-4 z-10">
        Capturing the world <br /> and chasing life
      </h2>
    </div>
  );
};

export default Hero;