import PhotoGrid from "@/sections/PhotoGrid";
import About from "@/sections/About";
import Break from "@/sections/Break";
import { Contact } from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import CallToAction from "@/sections/CallToAction";
import Layout from "@/components/Layout";

import Script from "next/script";

const Section = ({ className, children }) => {
  return <section className={`px-6 md:px-4 ${className}`}>{children}</section>;
};

export default function Home() {

  return (
    <>
      <Script src="/getHeight.js"></Script>
      <Layout>
        <main className="relative">
          <Hero />
          <Section>
            <About />
          </Section>
          <Break />
          <section className="h-auto px-6 md:px-4">
            <PhotoGrid />
          </section>
          <Break />
          <Section>
            <Work />
          </Section>
          <CallToAction />
          <Break />
          <section className="min-h-full">
            <Contact />
          </section>
          <Footer />
        </main>
      </Layout>
    </>
  );
}
