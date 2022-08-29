import React from "react";
import { SheetContext } from "@/components/Sheet";
import { Text, Button, Image, Heading } from "@components";
import { ArrowUp, ArrowUpRight } from "phosphor-react";
import Layout from "@/components/Layout";
import { ContactDialog } from "@/components/sections/Contact";
import { NextSeo } from "next-seo";

const clients = [
  "Shopify",
  "Uber",
  "Google",
  "Samsung",
  "dbrand",
  "Timbuk2",
  "Amdocs",
  "500px",
  "Delta Hotels",
];

const notables = [
  {
    title: "500px",
    href: "https://iso.500px.com/toronto-urban-photography-workshop/",
  },
  {
    title: "Feature Shoot",
    href: "https://iso.500px.com/4-viral-photos-can-teach-us-creating-marketable-images/",
  },
  {
    title: "Metro News",
    href: "https://drive.google.com/file/d/0B-wYLuK2QlRwb1FmOThmUmYwekU/view?resourcekey=0-qLFUahFzx44xsvJse_xK1A",
  },
];

const AboutText = () => (
  <div className="flex rounded">
    <div className="flex flex-col gap-4 max-w-prose">
      <p className="text-lg sm:text-2xl">
        {`Photography has been part of my daily life for the past 6 years. With a natural instinct to explore the world around me, I’ve built the skill to capture cityscapes, architecture, and urban environments in a new light.`}
      </p>

      <p className="text-lg sm:text-2xl">
        I try to use photography to prove that life is worth chasing. By working
        with various brands, large and small, I’ve built the versatility to tell
        a story through a variety of photography styles ranging from lifestyle,
        concerts, to corporate events.
      </p>
      <p className="text-lg sm:text-2xl">
        I’m always excited to continue pushing myself and seeing what stories I
        can tell with my camera.
      </p>
      <p className="text-lg sm:text-2xl">
        Thank you for taking the time to visit my portfolio. If you’re
        interested in working together,{" "}
        <a
          href="mailto:typicalmitul@gmail.com"
          className="relative better-underline betterhover:hover:px-1"
        >
          shoot me an email
        </a>{" "}
        and I’ll get back to you.
      </p>
    </div>
  </div>
);

const ClientHistory = ({ setOpen }) => (
  <div className="mt-6">
    <Heading>Client History</Heading>
    <ul
      className="grid gap-4 pt-2 md:text-3xl whitespace-nowrap"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))",
      }}
    >
      {clients.map((client, index) => (
        <li
          key={index}
          className="px-1.5 py-2.5 text-center border rounded border-stone"
        >
          {client}
        </li>
      ))}
      <li>
        <Button
          fullWidth
          className="text-lg normal-case h-max bg-eggshell border-stone"
          onClick={() => setOpen(true)}
        >
          + you next?
        </Button>
      </li>
    </ul>
  </div>
);

export default function About() {
  const { open, setOpen } = React.useContext(SheetContext);

  return (
    <>
      <NextSeo title="About" canonical="https://typicalmitul.com/about" />
      <ContactDialog open={open} onOpenChange={setOpen} />
      <main className="relative pb-20">
        <div className="flex items-center px-6 md:px-4 gap-x-yeat">
          <span className="w-6 h-6 border rounded-full bg-yolk border-dark shrink-0"></span>
          <h1 className="text-5xl uppercase">About</h1>
        </div>
        <div className="grid px-6 gap-x-12 gap-y-4 md:px-4 md:grid-cols-2">
          <Image src="/images/idx_me.jpg" alt="Photo of myself" priority />
          <section className="flex flex-col gap-y-4">
            <AboutText />
            <hr className="-mb-1" />
            <div className="md:col-start-2">
              <Heading>Notable</Heading>
              <div
                className="grid gap-2 pt-2 whitespace-nowrap"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                }}
              >
                {notables.map((notable, index) => (
                  <Button
                    key={index}
                    href={notable.href}
                    asAnchor
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg-eggshell normal-case border-stone px-1 py-1.5 "
                  >
                    {notable.title}
                    <ArrowUpRight />
                  </Button>
                ))}
              </div>
              <ClientHistory setOpen={setOpen} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
