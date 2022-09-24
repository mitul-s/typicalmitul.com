import '../styles/fonts.css'
import '../styles/globals.css'

import React, { useEffect } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { SheetProvider } from "@/components/Sheet"
import { DefaultSeo } from "next-seo";
import Layout from "@/components/Layout"

import splitbee from "@splitbee/web";

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    splitbee.init();
  }, [])

  return (
    <TooltipProvider>
      <SheetProvider>
        <Layout>
          <DefaultSeo
            title={undefined}
            titleTemplate="%s | Typical Mitul"
            defaultTitle="Typical Mitul | Toronto Photographer for Hire"
            description="Photographer based in Toronto, Canada specializing in cityscapes, architecture and portraits."
            canonical="https://typicalmitul.com"
            twitter={{
              handle: "@typicalmitul",
              site: "@typicalmitul",
              cardType: "summary",
            }}
            openGraph={{
              type: "website",
              locale: "en_CA",
              url: "https://typicalmitul.com",
              title: "Typical Mitul | Toronto Photographer for Hire",
              description: "Photographer based in Toronto, Canada specializing in cityscapes, architecture and portraits.",
            }}
          />
          <Component {...pageProps} />
        </Layout>
      </SheetProvider>
    </TooltipProvider>
  );
}

export default MyApp
