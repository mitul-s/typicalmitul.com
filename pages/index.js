import PhotoGrid from "@/sections/PhotoGrid";
import About from "@/sections/About";
import Break from "@/sections/Break";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import CallToAction from "@/sections/CallToAction";

const Section = ({ className, children }) => {
  return <section className={`px-6 md:px-4 ${className}`}>{children}</section>;
};

export default function Home() {
  return (
    <main className="relative">
      <Section className="py-3">
        <div className="mb-6 hero-image">
          <Hero />
        </div>
      </Section>
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
      {/* <Break /> */}
      <section className="min-h-full">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
