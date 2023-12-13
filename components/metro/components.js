import React from "react";
import { ScrollSync } from "react-scroll-sync";
import * as Face from "@/components/metro/Face";
import { AnimatePresence, motion } from "framer-motion";

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
  return (
    <ScrollSync>
      <div className={"fixed w-screen h-screen duration-1000 perspective-2000"}>
        <AnimatePresence>
          <motion.div
            className="fixed w-full h-full preserve-3d"
            initial={{
              translateZ: -400,
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
