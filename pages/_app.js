import "../styles/fonts.css";
import "../styles/globals.css";

import React, { useEffect } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { SheetProvider } from "@/components/Sheet";
import { DefaultSeo } from "next-seo";
import Layout from "@/components/Layout";

import splitbee from "@splitbee/web";
import { Analytics } from "@vercel/analytics/react";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    splitbee.init();
  }, []);

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
              cardType: "summary_large_image",
            }}
            openGraph={{
              type: "website",
              locale: "en_CA",
              url: "https://typicalmitul.com",
              title: "Typical Mitul | Toronto Photographer for Hire",
              description:
                "Photographer based in Toronto, Canada specializing in cityscapes, architecture and portraits.",
              images: [
                {
                  url: "https://typicalmitul.com/images/og.png",
                  width: 1200,
                  height: 630,
                  alt: "Typical Mitul | Toronto Photographer for Hire",
                  type: "image/png",
                },
              ],
            }}
          />
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </SheetProvider>
    </TooltipProvider>
  );
};

export default MyApp;
