import { ArrowUpRight } from "phosphor-react";
import { motion } from "framer-motion"

const arrowVariants = {
  initial: {
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
    }
  },
  hover: {
    x: 3,
    rotate: 45,
    transition: {
      duration: 0.7,
    }
  },
};

const Button = ({ children, ...props }) => {
  const MotionArrow = motion(ArrowUpRight);
  return (
    <div className="isolate">
      <motion.button whileHover="hover" animate="initial" className="relative flex items-center px-4 py-1 transition-all duration-1000 rounded-full shadow-md outline-none glow bg-eggshell/50 hover:bg-eggshell hover:ring-4 hover:ring-yolk focus:ring-yolk focus:ring-2 gap-x-1" {...props}>
        <span>Open Project</span>
        <MotionArrow className="shrink-0" variants={arrowVariants} />
      </motion.button>
    </div>
  );
};

export default function About() {
  return (
    <main className="relative">
    <div className="grid grid-cols-2 px-4 gap-x-12">
      <section className="">
          <div>
            <h1 className="text-3xl uppercase">About</h1>
            <h2>This is a few words long</h2>
          </div>
          <div className="w-full bg-gray-100 border rounded aspect-3/2"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
            tellus molestie. Vulputate dignissim suspendisse in est. Vel
            pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi
            vitae suscipit tellus mauris. Posuere morbi leo urna molestie at
            elementum eu. Urna duis convallis convallis tellus. Urna molestie at
            elementum eu. Nunc sed blandit libero volutpat.
          </p>
      </section>
      <section className="flex w-1/3">
        <h2 className="text-xl">Client History</h2>
      </section>
      </div>
    </main>
  );
}