import React from "react";
import { cva, cx } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { Noise } from "@/components/metro/components";
import { ScrollSyncPane } from "react-scroll-sync";
import { useMeasure } from "@uidotdev/usehooks";
import useTouchScreen from "@/hooks/useHasTouchScreen";

const face = cva(["w-screen", "h-screen", "overflow-hidden"], {
  variants: {
    face: {
      front: "relative cube-front",
      main: "absolute cube-main border-2 border-metro",
      top: "absolute cube-top border-2 border-metro",
      bottom: "absolute cube-bottom border-2 border-metro",
      left: "absolute cube-left",
      right: "absolute cube-right",
    },
  },
});

const faceSpacing = cva([], {
  variants: {
    face: {
      top: "mt-[100vh]",
      bottom: "mt-[-100vh] pb-[100vh] no-scrollbar",
    },
  },
});

const MotionSection = motion.section;

export const FaceContext = React.createContext();
export const FaceProvider = ({ children }) => {
  const [calculatedHeight, setCalculatedHeight] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  let context = {
    calculatedHeight,
    setCalculatedHeight,
    dialogOpen,
    setDialogOpen,
  };

  return (
    <FaceContext.Provider value={context}>{children}</FaceContext.Provider>
  );
};

const Face = React.forwardRef(({ children, id, ...props }, forwardRef) => {
  return (
    <MotionSection
      id={id}
      className={face({ face: id })}
      {...props}
      ref={forwardRef}
    >
      <Noise />
      {children}
    </MotionSection>
  );
});

Face.displayName = "Face";

const FrontFace = ({ children }) => {
  const { dialogOpen } = React.useContext(FaceContext);
  return (
    <AnimatePresence>
      {dialogOpen && (
        <Face
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
          id={"front"}
        >
          {children}
        </Face>
      )}
    </AnimatePresence>
  );
};

const SideFace = ({ side }) => {
  return <Face id={side} aria-hidden={true} />;
};

const ScrollFace = ({ id, children }) => {
  const [mainRef, { height: mainHeight }] = useMeasure();
  const [sectionRef, { height: sectionHeight }] = useMeasure();
  const hasTouchScreen = useTouchScreen();

  const { calculatedHeight, setCalculatedHeight } =
    React.useContext(FaceContext);

  React.useEffect(() => {
    if (id === "main") setCalculatedHeight(mainHeight - sectionHeight);
  }, [id, mainHeight, sectionHeight, setCalculatedHeight]);

  const isTopFace = id === "top";

  return (
    <Face ref={sectionRef} id={id}>
      <ScrollSyncPane>
        <div
          className={cx(
            "overflow-auto no-scrollbar animate-content-in delay-1000",
            !isTopFace ? "pb-[var(--cube-bottom)]" : "",
            hasTouchScreen ? "h-[100svh]" : "h-screen"
          )}
        >
          <div
            ref={mainRef}
            className={faceSpacing({ face: id })}
            style={{
              height: isTopFace
                ? `calc(${calculatedHeight}px + var(--cube-bottom))`
                : "auto",
              overflow: isTopFace ? "hidden" : undefined,
            }}
          >
            {children}
          </div>
        </div>
      </ScrollSyncPane>
    </Face>
  );
};

const Front = FrontFace;
const Side = SideFace;
const Scroll = ScrollFace;
const Provider = FaceProvider;
const Context = FaceContext;

export { Front, Side, Scroll, Provider, Context };
