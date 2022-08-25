import React from "react";
import { motion } from "framer-motion";
import { arrowVariants } from "../constants";
import { MotionArrowUpRight } from "../constants";
import { cva } from "class-variance-authority";

export const GlowButton = ({ children, ...props }) => {
  return (
    <div className="isolate">
      <motion.button
        whileHover="hover"
        animate="initial"
        className="relative flex items-center px-4 py-1 transition-all duration-1000 rounded-full shadow-md outline-none glow bg-eggshell/50 betterhover:hover:bg-eggshell betterhover:hover:ring-4 betterhover:hover:ring-yolk focus:ring-yolk focus:ring-2 gap-x-1"
        {...props}
      >
        <span>Visit Project</span>
        <MotionArrowUpRight
          className="shrink-0"
          variants={arrowVariants}
          custom={0.8}
        />
      </motion.button>
    </div>
  );
};

const button = cva(["button"], {
  variants: {
    intent: {
      primary: [
        "bg-yolk",
        "text-dark",
        "border-dark",
        "betterhover:hover:bg-yolk/75",
        "font-medium",
        "outline-none",
        "focus:ring-4",
        // "hover:focus:ring-yolk/50",
        // "focus:ring-blue/50",
      ],
    },
    fullWidth: {
      true: ["w-full"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export const Button = React.forwardRef(
  (
    { asAnchor, type, intent, fullWidth, className, children, ...props },
    forwardRef
  ) => {
    const Component = asAnchor ? "a" : "button";
    const defaultType = asAnchor ? undefined : "button";

    return (
      <Component
        type={type ?? defaultType}
        className={button({ intent, fullWidth, class: className })}
        ref={forwardRef}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
