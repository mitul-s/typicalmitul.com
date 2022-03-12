import { ButtonLink, Tooltip } from "@components";
import NextLink from "next/link";

let us =
  "https://images.unsplash.com/photo-1645389776527-43c47e909550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
let us2 = "https://images.unsplash.com/photo-1646075900858-6e813f664593";
let us3 = "https://images.unsplash.com/photo-1643068485255-15bb6c3727da";

const About = () => {
  return (
    <div className="grid h-full grid-cols-2 pt-12 pb-6 gap-x-12">
      <div className="flex flex-col justify-end">
        <div className="flex items-center mb-auto leading-none uppercase gap-x-2">
          <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
          <h2 className="text-dark">About</h2>
        </div>

        <p className="mb-4 text-4xl tracking-tight xl:text-5xl">
          Typical
          <Tooltip text="Not actually my first name">
            <span className="font-light text-yolk">*</span>
          </Tooltip>
          Mitul is a photographer based in Toronto, Canada dedicated to defining{" "}
          <b className="">thoughtful</b> and{" "}
          <b className="">memorable experiences</b> through every capture.
        </p>
        <NextLink href="/about" passHref>
          <ButtonLink>
            <span>Learn more</span>
            <span>-&gt;</span>
          </ButtonLink>
        </NextLink>
      </div>
      <div>
        <div className="group w-full h-[90vh] transition duration-1000 rounded shadow-none hover:scale-[1.003] hover:-translate-y-0.5 bg-black/25 hover:border-yolk hover:shadow-yolk/25 overflow-hidden border border-stone">
          <img
            src={us}
            alt="About"
            className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
