import '../styles/fonts.css'
import '../styles/globals.css'

import * as Tooltip from "@radix-ui/react-tooltip";
import GuidingLines from '@/components/GuidingLines';
import  Navigation  from '@/components/Navigation';
import Footer from "@/sections/Footer"
import splitbee from "@splitbee/web";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect = (() => {
    splitbee.init();
  }, [])

  return (
    <>
      <Tooltip.Provider>
        <div className="relative min-h-full">
          <GuidingLines />
          <Navigation />
          <Component {...pageProps} />
        </div>
      </Tooltip.Provider>
    </>
  );
}

export default MyApp
