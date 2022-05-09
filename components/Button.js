import React from "react"
import { motion } from "framer-motion"
import { arrowVariants } from "../constants";
import { MotionArrowUpRight } from "../constants";
let baseClasses =
  "inline-block w-full font-medium text-left uppercase border border-dark rounded-lg bg-yolk transition-all hover:bg-dark hover:border-yolk hover:text-white overflow-hidden";

export const GlowButton = ({ children, ...props }) => {
  return (
    <div className="isolate">
      <motion.button
        whileHover="hover"
        animate="initial"
        className="relative flex items-center px-4 py-1 transition-all duration-1000 rounded-full shadow-md outline-none glow bg-eggshell/50 hover:bg-eggshell hover:ring-4 hover:ring-yolk focus:ring-yolk focus:ring-2 gap-x-1"
        {...props}
      >
        <span>Visit Project</span>
        <MotionArrowUpRight className="shrink-0" variants={arrowVariants} custom={0.8} />
      </motion.button>
    </div>
  );
};




export const ButtonLink = React.forwardRef(({ href, className, children }, ref) => {
  return (
    <a className={baseClasses} ref={ref} href={href}>
      <motion.span className="flex justify-between w-full h-full p-4">
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

