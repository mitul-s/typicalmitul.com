import NextLink from "next/link"
import { ArrowUpRight } from "phosphor-react";

const Button = ({ children, ...props }) => {
  return (
    <div className="isolate">
      <button className="relative flex items-center px-4 py-1 transition-all duration-1000 rounded-full shadow-md outline-none glow bg-eggshell/50 hover:bg-eggshell hover:ring-4 hover:ring-yolk focus:ring-yolk focus:ring-2 gap-x-1" {...props}>
        <span>Open Project</span>
        <ArrowUpRight className="shrink-0" />
      </button>
    </div>
  );
};


export default function About() {
    return (
      <div>
      <div className="flex items-center justify-center mt-24 bg-black border py-28 border-dark">
        <Button/>
      </div>
        <p className="text-[23px] max-w-prose pt-24 px-6">
          OHME is a Seattle jeweller making adventurous pieces that embody
          optimism and inclusivity. Founded in 2014, they built up a fan base
          and a number of stockists. When they decided to grow the business,
          Emily designed them a brand identity that encompasses their character
          while still remaining subdued enough that their jewellery can shine
          through. They believe self-expression through personal style can be a
          radical act, especially for people in marginalised bodies. Some of
          their pieces spell out this message literally – like their vulva rings
          – while others are simply freely expressive. Likewise, their identity
          reflects their values both literally and nonliterally. Their literal
          side is displayed in a tagline motif, “Self-expression as a radical
          act.” Their abstract side takes inspiration from the craft movement
          and the ornate shapes found in its pieces. These shapes are reflected
          throughout their custom logotype, lettermark, brand illustrations, and
          headline font.
        </p>
        <NextLink href="/" passHref>
          <a>Home</a>
        </NextLink>
      </div>
    );
}