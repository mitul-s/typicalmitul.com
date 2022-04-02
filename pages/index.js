import GuidingLines from "@/components/GuidingLines";
import Image from "@/components/Image";
import PhotoGrid from "@/components/sections/PhotoGrid";
import About from "@/sections/About";
import Break from "@/sections/Break";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import { ButtonLink, Navigation, Section } from "@components";
import NextImage from "next/image";
import NextLink from "next/link";
import React from "react";

let us =
  "https://images.unsplash.com/photo-1645389776527-43c47e909550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
let us2 =
  "https://images.unsplash.com/photo-1647089490719-d539f4041119";
let us3 = "https://images.unsplash.com/photo-1643068485255-15bb6c3727da";
let ph =
  "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147195/Typical%20Mitul/Test/RainyJays_ovyisq.jpg";
  let ph2 =
    "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147216/Typical%20Mitul/Test/Karen_ifcimd.jpg";
    let ph3 =
      "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147132/Typical%20Mitul/Test/IMG_7893_cntower_print_men3lj.jpg";


const CallToAction = () => {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <div className="col-span-6 px-24 py-12 space-y-12 bg-white border-4 rounded border-yolk">
        <h3 className="text-3xl font-bold uppercase">Uber</h3>
        <blockquote className="text-5xl max-w-prose">
          &quot;We worked with Mitul to build an exhibit featuring employee
          stories. He provided high quality work that was on-brief and delivered
          within a tight timeline!&quot;
        </blockquote>
        <p>Nicole Korb</p>
      </div>
      {/* <div className="flex items-center justify-center rounded bg-yolk">
        &rarr;
      </div> */}
    </div>
  );
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};


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
          <CallToAction />
        </section>
        <Break />
        <section className="min-h-full">
          <Contact />
        </section>
      </main>
  );
}
