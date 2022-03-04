import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navigation, ButtonLink, Heading, Marquee, Section } from '@components';
import Image from '@/components/Image';
import NextLink from "next/link";
import NextImage from "next/image";
import { Root, Trigger, Content } from "@radix-ui/react-tooltip";

const Hero = () => {
  return (
    <div className="grid h-full border rounded border-dark bg-yolk">
      <div className="p-2 h-[90%] content">
        <div className="h-full rounded-sm bg-gray-300 border border-[#cbd6e0]"></div>
      </div>
      <h2 className="flex justify-center items-end overlay text-[144px] font-[900] leading-none tracking-tighter">
        CHASING LIFE
      </h2>
    </div>
  );
}

let us =
  "https://images.unsplash.com/photo-1645389776527-43c47e909550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
  let us2 =
    "https://images.unsplash.com/photo-1646075900858-6e813f664593";

const About = () => {
  return (
    <div className="grid h-full grid-cols-2 gap-x-12">
      <div className="flex flex-col justify-between">
        {/* <Heading as="h2">About</Heading> */}
        <div className="flex items-center leading-none uppercase gap-x-2">
          <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
          <h2 className="text-dark">About</h2>
        </div>
        <div>
          <Root>
            <p className="mb-4 text-5xl tracking-tight">
              Typical
              <Trigger>
                <sup className="text-stone">*</sup>
              </Trigger>
              <Content className='text-xs px-1 py-0.5 border rounded bg-yolk border-dark'>
                No, thats not my real name.
              </Content>
              Mitul is a photographer based in Toronto, Canada dedicated to
              defining <b className="">thoughtful</b> and{" "}
              <b className="">memorable experiences</b> through every capture.
            </p>
            <p className="mb-8 font-normal text-stone">
              Every moment, every capture and everything you can think of. Every
              moment, every capture and everything you can think of. Every
              moment, every capture and everything you can think of.
            </p>
          </Root>
          <NextLink href="/about" passHref>
            <ButtonLink>
              <span>Learn more</span>
              <span>-&gt;</span>
            </ButtonLink>
          </NextLink>
        </div>
      </div>
      <div>
        <div className="w-full h-[90vh] transition duration-1000 rounded shadow-none hover:scale-[1.003] hover:-translate-y-0.5 bg-black/25 hover:shadow-xl hover:shadow-yolk/25 overflow-hidden border border-stone">
          <img src={us} alt="About" className="object-cover" />
        </div>
      </div>
    </div>
  );
}

const Photos = () => {
  return (
    <div className="grid h-full grid-rows-2 mx-4 mb-4 gap-x-6 gap-y-2 sm:grid-cols-2">
      <div className="relative w-full h-full">
        <NextImage src={us2} layout="fill" objectFit="cover" />
      </div>
      <div className="relative w-full h-full">
        <NextImage src={us2} layout="fill" objectFit="cover" />
      </div>
      <div>
        Hello
      </div>
      {/* <div
        className="grid grid-flow-col col-span-2 -mx-4 overflow-x-scroll gap-x-2"
        style={{
          gridTemplateColumns: "auto",
          gridTemplateRows: "minmax(150px, 1fr)",
        }}
      >
        <div className="relative overflow-hidden rounded min-w-max w-[32rem] ml-4">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
        <div className="relative overflow-hidden rounded min-w-max w-96">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
        <div className="relative overflow-hidden rounded min-w-max w-96">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
        <div className="relative overflow-hidden rounded min-w-max w-96">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
        <div className="relative overflow-hidden rounded min-w-max w-96">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
        <div className="relative overflow-hidden rounded min-w-max w-96">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
        <div className="relative overflow-hidden rounded min-w-max w-96">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
        <div className="relative mr-4 overflow-hidden rounded min-w-max w-96">
          <NextImage src={us2} layout="fill" objectFit="cover" />
        </div>
      </div> */}
    </div>
  );
}

const Break = () => {
  return (
    <>
      <div className="grid w-full">
        <hr className="self-center content border-stone"></hr>
        <div className="flex justify-between px-4 mt-px -mr-px font-light cursor-default select-none text-stone text-7xl overlay">
          <span className='aspect-square'>+</span>
          <span className='aspect-square'>+</span>
          <span className='aspect-square'>+</span>
          <span className='aspect-square'>+</span>
          <span className='aspect-square'>+</span>
        </div>
      </div>
    </>
  );
}

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
}

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
            <div className="flex mt-4 gap-x-4">
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
        <Image src={us2} alt="" />
        <Image src={us2} alt="" />
        <Image src={us2} alt="" />
        <Image src={us2} alt="" />
        <Image src={us2} alt="" />
        <Image src={us2} alt="" />
        <Image src={us2} alt="" />
      </div>
    </div>
  );
}


const Contact = () => {
  return (
    <form className="flex flex-col justify-end w-full py-6 h-96">
      <div className='w-full'>
        <label className='sr-only' htmlFor='email'>Email</label>
        <input className='w-full py-2 text-3xl bg-transparent border-b border-dark/25' id='email' name='email' placeholder="What's your email?" />
      </div>
      <div className='w-full'>
        <label className='sr-only' htmlFor='email'>Email</label>
        <textarea className='w-full py-2 text-3xl bg-transparent border-b border-dark/25' id='email' name='email' placeholder="What's on your mind?" />
      </div>
      <button className='w-full py-4 rounded bg-yolk'>Submit</button>
    </form>
  );
}

const Footer = () => {
  return (
    <footer className="border-t border-dark">
      <div className="flex justify-between px-4 py-2 font-medium uppercase">
        <div className="space-x-4">
          <a className="">Instagram</a>
          <a className="">Twitter</a>
        </div>
        <a>Contact</a>
      </div>
    </footer>
  );
}


export default function Home() {
  return (
    <div className="relative min-h-full">
      <div className="absolute w-full h-full">
        <div className="grid-container">
          <div className="grid-item first:bg-transparent"></div>
          <div className="grid-item"></div>
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
        <section className="mx-4 my-6">
          <About />
        </section>
        <Section padding={false}>
          <Break />
        </Section>
        <Section padding={false}>
          <Photos />
          <NextLink href="/photos" passHref>
            <ButtonLink>
              <span>See more</span>
              <span>-&gt;</span>
            </ButtonLink>
          </NextLink>
        </Section>
        <Section className="relative">
          <ScrollArea />
        </Section>
        <Section>
          <CallToAction />
        </Section>
        <Section>
          <Break />
        </Section>
        <Section>
          <Contact />
        </Section>
        <Section padding={false}>
          <Footer />
        </Section>
      </main>
    </div>
  );
}
