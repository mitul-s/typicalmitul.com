import React, { useRef, useEffect, useCallback, useState } from "react";
import { cva, cx } from "class-variance-authority";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import { useMeasure } from "@uidotdev/usehooks";

const face = cva(["absolute", "w-screen", "h-screen", "overflow-hidden"], {
  variants: {
    face: {
      main: "cube-main border-2 border-metro",
      top: "cube-top border-2 border-metro",
      bottom: "cube-bottom border-2 border-metro",
      left: "cube-left",
      right: "cube-right",
      front: "cube-front",
    },
  },
});

const faceSpacing = cva([], {
  variants: {
    face: {
      main: "",
      top: "mt-[100vh]",
      bottom: "mt-[-100vh] pb-[100vh] no-scrollbar",
    },
  },
});

const FaceContext = React.createContext();
const FaceProvider = ({ children }) => {
  const [calculatedHeight, setCalculatedHeight] = useState(null);

  let context = {
    calculatedHeight,
    setCalculatedHeight,
  };

  return (
    <FaceContext.Provider value={context}>{children}</FaceContext.Provider>
  );
};

export const Face = ({ id, children }) => {
  const [mainRef, { height: mainHeight }] = useMeasure();
  const [sectionRef, { height: sectionHeight }] = useMeasure();
  const { calculatedHeight, setCalculatedHeight } =
    React.useContext(FaceContext);

  React.useEffect(() => {
    if (id === "main") setCalculatedHeight(mainHeight - sectionHeight);
  }, [id, mainHeight, sectionHeight, setCalculatedHeight]);

  return (
    <section
      className={face({ face: id })}
      aria-hidden={id === "left" || id === "right" ? "true" : undefined}
      ref={sectionRef}
    >
      <Noise />
      {children && (
        <ScrollSyncPane>
          <div
            id={id}
            className={cx(
              "h-screen overflow-auto no-scrollbar animate-content-in delay-1000",
              id !== "top" ? "pb-[20vh]" : ""
            )}
          >
            <div
              ref={mainRef}
              className={faceSpacing({ face: id })}
              style={{
                height:
                  id === "top" ? `calc(${calculatedHeight}px + 20vh)` : "auto",
                overflow: id === "top" ? "hidden" : undefined,
              }}
            >
              {children}
            </div>
          </div>
        </ScrollSyncPane>
      )}
    </section>
  );
};

export const Shell = () => {
  return (
    <div className="fixed inset-0 z-10 w-full h-full border-[3px] pointer-events-none border-metro shadow-[0_0_0_3px_#00704F]" />
  );
};

export const Noise = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-1 isolate opacity-40"
      style={{
        background: "url(/images/noise.svg)",
      }}
    />
  );
};

export const CubeContainer = ({ children }) => {
  return (
    <ScrollSync>
      <FaceProvider>
        <Shell />
        <div className="fixed w-screen h-screen duration-1000 perspective-2000 animate-cube-in">
          <div
            className="fixed w-full h-full preserve-3d"
            style={{
              transform: "translateZ(-300px)",
            }}
          >
            {children}
          </div>
        </div>
      </FaceProvider>
    </ScrollSync>
  );
};
