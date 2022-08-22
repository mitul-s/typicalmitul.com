import '../styles/fonts.css'
import '../styles/globals.css'

import { useEffect } from "react";
import NextHeadSeo from "next-head-seo";
import splitbee from "@splitbee/web";
import * as Tooltip from "@radix-ui/react-tooltip";
import GuidingLines from '@/components/GuidingLines';
import  Navigation  from '@/components/Navigation';

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    splitbee.init();
  }, [])

  return (
    <>
      <NextHeadSeo
        title="Typical Mitul – Toronto Photographer for Hire"
        description="Photographer based in Toronto, Canada specializing in cityscapes, architecture and portraits."
        canonical="https://typicalmitul.com"
        twitter={{
          site: "@typicalmitul",
        }}
      />
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
