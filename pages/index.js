import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import { Navigation, ButtonLink, Heading, Marquee, Section } from "@components";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Contact from "@/sections/Contact";
import Break from "@/sections/Break";
import Image from "@/components/Image";
import NextLink from "next/link";
import NextImage from "next/image";
import React from "react"

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

const Photos = () => {
  return (
    <>
      <div className="grid h-[90vh] mb-4 gap-x-6 gap-y-2 sm:grid-cols-2 px-4">
        <div className="relative w-full h-full border rounded shadow-sm border-stone">
          <NextImage src={ph3} layout="fill" objectFit="cover" className="object-top"/>
        </div>
        <div className="relative w-full h-full border rounded shadow-sm border-stone">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="flex col-span-2 overflow-auto h-[50vh] pl-4 pr-4 gap-x-6">
        <div className="relative w-1/2 h-full border rounded shadow-sm border-stone shrink-0 grow">
          <NextImage src={us3} layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-full border rounded shadow-sm border-stone shrink-0 grow">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-full border rounded shadow-sm border-stone grow shrink-0">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-full border rounded shadow-sm border-stone grow shrink-0">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-full h-full border rounded shadow-sm border-stone grow shrink-0">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
      </div>
    </>
  );
};


const CallToAction = () => {
  return (
    <div className="grid grid-cols-4 py-12 gap-x-2">
      <div className="col-span-3 py-12 space-y-12 bg-white rounded px-11">
        <h3 className="text-3xl font-bold uppercase">Uber</h3>
        <blockquote className="text-5xl max-w-prose">
          &quot;We worked with Mitul to build an exhibit featuring employee
          stories. He provided high quality work that was on-brief and delivered
          within a tight timeline!&quot;
        </blockquote>
        <p>Nicole Korb</p>
      </div>
      <div className="flex items-center justify-center rounded bg-yolk">
        &rarr;
      </div>
    </div>
  );
};

const ScrollArea = () => {
  return (
    <div className="relative grid h-full grid-cols-2 gap-4">
      <div className="sticky top-0 w-full h-screen pt-12 pb-6 grow-1">
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center leading-none uppercase gap-x-2">
            <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
            <h2 className="text-dark">Work</h2>
          </div>
          {/* <Heading as="h3">Work</Heading> */}
          <div>
            <p className="text-3xl">
              So I started from scratch. I made another, then another. And by
              the end of the semester, by like box number five, I had built this
              thing. You should have seen it. It was insane. I mean, I built it
              out of Peruvian walnut with inlaid zebrawood.
            </p>
            <p className="w-2/3 mt-6 text-md text-dark/50">
              Photography is my craft. From brand shoots to non-exclusive
              licensing, I’m able to provide creative pieces that work for you.
            </p>
            <div className="flex mt-4 gap-x-1">
            {/* <div className="bg-dark text-yolk font-medium uppercase tracking-wide px-1.5 leading-none py-1 self-end rounded text-sm border border-yolk">
              Photography
            </div>
            <div className="bg-dark text-yolk font-medium uppercase tracking-wide px-1.5 leading-none py-1 self-end rounded text-sm border border-yolk">
              Licensing
            </div> */}
              <div className="flex items-center justify-center w-1/2 px-6 py-4 border rounded border-dark">
                Photography
              </div>
              <div className="flex items-center justify-center w-1/2 px-6 py-4 border rounded border-dark">
                Licensing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-12 pb-6 gap-y-3">
        <Image src={us} alt="" />
        <Image src={us2} alt="" />
        <Image src={us3} alt="" />
        <Image src={ph} alt="" />
        <Image src={ph2} alt="" />
        <Image src={us2} alt="" />
        <Image src={ph3} vertical alt="" />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-full">
      <div className="absolute w-full h-full px-4 pointer-events-none">
        <div className="relative grid h-full max-w-full grid-cols-2 grid-rows-1 mx-auto my-0">
          <div className="w-px bg-stone first-of-type:bg-transparent"></div>
          <div className="hidden w-px bg-stone"></div>
          <div className="w-px bg-stone"></div>
          <div className="hidden w-px bg-stone"></div>
          <div className="w-px bg-stone last-of-type:bg-transparent last-of-type:absolute last-of-type:top-0 last-of-type:right-0 last-of-type:h-full"></div>
        </div>
      </div>
      <Navigation />
      <main className="relative">
        <section className="px-4">
          <Marquee />
          <div className="mb-6 hero-image">
            <Hero />
          </div>
        </section>
        {/* <div className="w-full h-px bg-dark/50"></div> */}
        <section className="mx-4">
          <About />
        </section>
        <Break />
        <section className="min-h-full">
          <Photos />
          <div className="px-4 mt-6">
            <NextLink href="/photos" passHref>
              <ButtonLink>
                <span>See more</span>
                <span>-&gt;</span>
              </ButtonLink>
            </NextLink>
          </div>
        </section>
        <section className="px-4">
          <ScrollArea />
        </section>
        <Section>
          <CallToAction />
        </Section>
        <Break />
        <section className="min-h-full">
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}
