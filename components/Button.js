import React from "react"
import { motion } from "framer-motion"
import { arrowVariants } from "../constants";
import { MotionArrowUpRight } from "../constants";
import { Slot } from "@radix-ui/react-slot";

let baseClasses =
  "w-full font-medium text-left uppercase border border-dark rounded-lg bg-yolk transition-all hover:bg-dark hover:border-yolk hover:text-white overflow-hidden";

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


export const Button = React.forwardRef(({ asChild, children, ...props }, ref) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component className={`${baseClasses} flex items-center justify-between p-4`} ref={ref} asChild={asChild} {...props}>
      {children}
    </Component>
  );
});

Button.displayName = "Button";

export default Button;