import React from "react";
import { ScrollSync } from "react-scroll-sync";
import * as Face from "@/components/metro/Face";
import { AnimatePresence, motion } from "framer-motion";
import useTouchScreen from "@/hooks/useHasTouchScreen";
import { cx } from "class-variance-authority";

export const Noise = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-1 isolate opacity-40 bg-noise"
    />
  );
};

export const CubeContainer = ({ children }) => {
  const { dialogOpen } = React.useContext(Face.Context);
  const hasTouchScreen = useTouchScreen();
  return (
    <ScrollSync>
      <div
        className={cx("fixed w-screen h-screen duration-1000 perspective-2000")}
      >
        <AnimatePresence>
          <motion.div
            className={cx(
              "fixed w-full h-full",
              hasTouchScreen ? "" : "preserve-3d"
            )}
            initial={{
              translateZ: hasTouchScreen ? 0 : -400,
            }}
            animate={{
              translateZ: dialogOpen ? -400 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </ScrollSync>
  );
};
