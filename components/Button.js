import React from "react"
import { motion } from "framer-motion"
let baseClasses =
  "inline-block w-full font-medium text-left uppercase border border-dark rounded bg-yolk transition-all hover:rounded-full hover:bg-dark hover:border-yolk hover:text-white overflow-hidden";

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

