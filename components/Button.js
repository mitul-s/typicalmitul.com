import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "phosphor-react";
let baseClasses =
  "inline-block w-full font-medium text-left uppercase border border-dark rounded-lg bg-yolk transition-all hover:rounded-full hover:bg-dark hover:border-yolk hover:text-white overflow-hidden";


export const GlowButton = ({ children, ...props }) => {
  return (
    <div className="isolate">
      <button
        className="relative flex items-center px-4 py-1 transition-all duration-1000 rounded-full shadow-md outline-none glow bg-eggshell/50 hover:bg-eggshell hover:ring-4 hover:ring-yolk focus:ring-yolk focus:ring-2 gap-x-1"
        {...props}
      >
        <span>Open Project</span>
        <ArrowUpRight className="shrink-0" />
      </button>
    </div>
  );
};

export const ButtonLink = React.forwardRef(({ href, children }, ref) => {
  return (
    <a href={href} className={baseClasses} ref={ref}>
      <motion.span
        whileHover={{
          x: [0, 1036],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          },
        }}
        className="flex justify-between w-full h-full p-4"
      >
        {children}
      </motion.span>
    </a>
  );
});

ButtonLink.displayName = "ButtonLink";

export const Button = ({ children }) => {
  return (
    <button className={baseClasses}>
      {children}
    </button>
  );
};

