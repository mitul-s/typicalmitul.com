import { motion } from "framer-motion";
import { ArrowUpRight } from "phosphor-react";

export const MotionArrowUpRight = motion(ArrowUpRight);
export const arrowVariants = {
  initial: duration => ({
    x: 0,
    rotate: 0,
    transition: {
      duration: duration / 2,
    },
  }),
  hover: (duration) => 
    ({x: 3,
    rotate: 45,
    transition: {
      duration: duration,
    },})
};