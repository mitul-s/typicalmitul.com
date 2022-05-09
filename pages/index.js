import PhotoGrid from "@/sections/PhotoGrid";
import About from "@/sections/About";
import Break from "@/sections/Break";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import CallToAction from "@/sections/CallToAction";

export default function Home() {
  return (
    <main className="relative">
      <section className="p-4">
        <div className="mb-6 hero-image">
          <Hero />
        </div>
      </section>
      <section className="mx-4">
        <About />
      </section>
      <Break />
      <section className="h-auto px-4">
        <PhotoGrid />
      </section>
      <Break />
      <section className="px-4">
        <Work />
      </section>
        <CallToAction />
      {/* <Break /> */}
      <section className="min-h-full">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
