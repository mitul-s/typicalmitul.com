import NextImage from "next/image"
import uber from "@/images/logos/uber-logo.png";

const CallToAction = () => {
  return (
    <div className="px-6 md:p-4">
      <div
        className="px-4 py-4 sm:py-8 rounded text-eggshell md:py-12 md:px-12 bg-[#276EF0] shadow shadow-[#276EF0]"
        style={{
          backgroundImage: "linear-gradient(to right, #276EF0, rgba(0, 0, 0, 0)), url(/noise.svg)",
        }}
      >
        <div className="flex flex-col max-w-6xl gap-y-6 md:gap-y-12">
          <div className={`relative w-12 sm:w-20 h-8 overflow-hidden`}>
            <NextImage
              src={uber}
              objectFit="contain"
              layout="fill"
              alt="Uber Logo"
            />
          </div>
          <blockquote className="text-xl sm:text-2xl sm:!leading-tight md:text-5xl">
            We worked with Mitul to build an exhibit featuring employee
            stories. He provided{" "}
            <b className="font-mtl-bold">high quality work</b> that was on-brief
            and delivered{" "}
            <b className="font-mtl-bold">within a tight timeline</b>!
          </blockquote>
          <div>
            <p className="text-sm">Nicole Korb</p>
            <p className="text-sm text-eggshell/50">Operations Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;