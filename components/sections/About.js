import { Button, Tooltip, Marquee, Image } from "@components";
import { ArrowRight } from "phosphor-react";
import NextLink from "next/link";
import idx_me from "../../public/images/man-standing-in-montreal-metro.jpg";

const About = () => {
  return (
    <>
      <div className="grid h-full grid-cols-1 sm:pt-6 gap-x-12 gap-y-6 md:grid-cols-2">
        <div className="flex flex-col gap-y-2 md:order-last">
          <Marquee />
          <Image
            src={idx_me}
            alt="A futuristic, cinematic photo of myself standing in front of blue tinted lights in the Montreal metro, wearing a red jacket"
            height="md:order-first aspect-square md:h-img"
          />
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex items-center mb-6 leading-none uppercase gap-x-2 md:mb-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-yolk border border-dark -mt-0.5" />
            <h2 className="text-dark">About</h2>
          </div>

          <p className="mb-4 text-2xl xl:text-5xl">
            Typical
            <Tooltip text="No, not actually my first name">
              <span className="font-light text-stone">*</span>
            </Tooltip>
            Mitul is a photographer based in Toronto, Canada dedicated to
            defining <b className="font-mtl-bold">thoughtful</b> and{" "}
            <b className="font-mtl-bold">memorable experiences</b> through every
            capture.
          </p>
          <NextLink href="/about" passHref>
            <Button asAnchor>
              <span>Get to know me</span>
              <ArrowRight />
            </Button>
          </NextLink>
        </div>
      </div>
    </>
  );
};

export default About;