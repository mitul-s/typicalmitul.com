import NextImage from "next/image";
let us3 =
  "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147142/Typical%20Mitul/Test/IMG_1448_mjrtnf.jpg";

const Hero = () => {
  return (
    <div className="grid h-full border rounded border-dark bg-yolk">
      <div className="p-2 content h-[90%]">
        <div className="relative h-full p-2 overflow-hidden rounded-sm">
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
      <h2 className="hero-heading flex justify-center items-end overlay z-10 text-[144px] font-[900] leading-none tracking-tighter">
        CHASING LIFE
      </h2>
    </div>
  );
};

export default Hero;