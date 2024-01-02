import React from "react";
import { ScrollSync } from "react-scroll-sync";
import * as Face from "@/components/metro/Face";
import { AnimatePresence, motion } from "framer-motion";
import useTouchScreen from "@/hooks/useHasTouchScreen";
import { cx } from "class-variance-authority";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Drawer } from "vaul";
import { X as Close } from "phosphor-react";

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
            className={cx("fixed", hasTouchScreen ? "" : "preserve-3d")}
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

export const Modal = ({ open, setOpen, children }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <Face.Front id="front">
        <DialogOverlay className="fixed inset-0 w-screen h-screen" />
        <DialogContent className="fixed left-[50%] top-[50%] w-full max-w-7xl gap-6 h-full sm:h-[90%] z-50 md:flex -translate-x-1/2 -translate-y-1/2 duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] overflow-auto">
          {children}
          <DialogClose className="absolute top-0 right-0 p-2 text-white bg-metro">
            <Close className="shrink-0" aria-label="Close modal" />
          </DialogClose>
        </DialogContent>
      </Face.Front>
    </Dialog>
  );
};

export const Sheet = ({ open, setDialogOpen, children }) => {
  return (
    <Drawer.Root open={open} onOpenChange={setDialogOpen} shouldScaleBackground>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-metro/20 backdrop-blur-sm" />
        <Drawer.Content className="bg-zinc-100 flex flex-col h-[94%] mt-24 fixed bottom-0 left-0 right-0 rounded-t-[10px] border-2 border-metro">
          <div className="relative flex flex-col w-full max-w-md mx-auto overflow-auto rounded-t-[10px]">
            <div
              className="fixed w-12 h-1 -translate-x-1/2 rounded-full top-2 bg-metro/80 left-1/2"
              aria-hidden={true}
            />
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
