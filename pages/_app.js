import '../styles/fonts.css'
import '../styles/globals.css'

import React, { useEffect } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { SheetProvider } from "@/components/Sheet"

import NextHeadSeo from "next-head-seo";
import splitbee from "@splitbee/web";

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
      <TooltipProvider>
        <SheetProvider>
          <Component {...pageProps} />
        </SheetProvider>
      </TooltipProvider>
    </>
  );
}

export default MyApp
