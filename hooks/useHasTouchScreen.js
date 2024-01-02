import { useEffect, useState } from "react";

const useTouchScreen = () => {
  const [hasTouchScreen, setHasTouchScreen] = useState(false);

  useEffect(() => {
    const checkTouchScreen = () => {
      if ("maxTouchPoints" in navigator) {
        setHasTouchScreen(navigator.maxTouchPoints > 0);
      } else if ("msMaxTouchPoints" in navigator) {
        setHasTouchScreen(navigator.msMaxTouchPoints > 0);
      } else {
        const mQ = window.matchMedia("(pointer:coarse)");
        if (mQ && mQ.media === "(pointer:coarse)") {
          setHasTouchScreen(!!mQ.matches);
        } else if ("orientation" in window) {
          setHasTouchScreen(true); // deprecated, but good fallback
        } else {
          const UA = navigator.userAgent;
          setHasTouchScreen(
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
              /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
          );
        }
      }
    };

    checkTouchScreen();
  }, []);

  return hasTouchScreen;
};

export default useTouchScreen;
