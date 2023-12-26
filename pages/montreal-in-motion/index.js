import React from "react";
import Link from "next/link";
import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import Image from "next/image";
import {
  InstagramLogo,
  Rows,
  EnvelopeSimple,
  SquaresFour,
  TwitterLogo,
  X,
  TiktokLogo,
  ArrowUpRight,
} from "phosphor-react";
import { cva, cx } from "class-variance-authority";
import * as Face from "@/components/metro/Face";
import { CubeContainer } from "@/components/metro/components";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Drawer } from "vaul";
import { NextSeo } from "next-seo";
import useTouchScreen from "@/hooks/useHasTouchScreen";
import { Analytics } from "@vercel/analytics/react";
import splitbee from "@splitbee/web";
import Head from "next/head";

const LAYOUTS = {
  LIST: "LIST",
  GRID: "GRID",
};

const button = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "py-1",
    "px-2",
    "font-medium",
    "text-white",
    "transition",
    "whitespace-nowrap",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "bg-metro",
    "gap-x-1",
    "self-stretch",
  ],
  {
    variants: {
      variant: { primary: "", secondary: "min-w-8 min-h-8 h-8 w-8" },
    },
  }
);

const Sheet = ({ open, setDialogOpen, children }) => {
  return (
    <Drawer.Root open={open} onOpenChange={setDialogOpen} shouldScaleBackground>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-metro/20 backdrop-blur-sm" />
        <Drawer.Content className="bg-zinc-100 flex flex-col h-[94%] mt-24 fixed bottom-0 left-0 right-0 rounded-t-[10px] border-2 border-metro">
          <div className="relative flex flex-col w-full max-w-md mx-auto overflow-auto rounded-t-[10px]">
            <div
              className="fixed w-12 h-1 -translate-x-1/2 rounded-full top-2 bg-metro/80 left-1/2"
              aria-hidden={true}
            />
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

const AboutContent = () => {
  const containerStyle =
    "py-12 bg-white shadow-xl xs:border-2 xs:border-metro text-metro xs:overflow-auto";
  return (
    <>
      <div className={cx(containerStyle, "px-4 md:w-2/3 md:px-12")}>
        <h2 className="text-3xl font-bold tracking-tight xs:tracking-normal xs:text-6xl">
          About <span className="hidden sm:inline-block">the project</span>
        </h2>
        <div className="flex flex-col mt-4 text-md xs:text-xl xs:mt-6 gap-y-3 max-w-prose">
          <p className="text-2xl">
            Montreal in Motion is a documentation of the metro, and an
            invitation to discover beauty within the architectural designs of
            each station.
          </p>
          <div className="w-full h-px my-2 bg-metro" role="separator" />
          <p>
            Montreal has forever been one of my favourite cities, for it&apos;s
            food, arts and most notably, the Metro system. Since my first visit,
            I&apos;ve been fascinated by distinct architectural differences and
            art installations in each station.
          </p>
          <p>
            At the end of 2021, I made the decisions to spend 30 days through
            the new year to capture the essence of both the city itself and my
            favourite metro stations.
          </p>
          <p>
            This project captures the stations from my perspective, from a time
            where the city was quieter and the streets were less crowded. Each
            station tells a unique story through its designs and artwork,
            mirroring the rich cultural diversity of Montreal.
          </p>
          <h3 className="mt-4 text-2xl font-bold">Informational</h3>
          <p>
            All photos were taken on a Sony A7C with a Sigma 24-70m f/2.8 lens.
            Any long exposure was hand-held.
          </p>
          <p>
            This website was designed and built by myself, with the intention to
            stay with the theme of Montreal&apos;s brutalist stations.
          </p>
        </div>
      </div>
      <div className={cx(containerStyle, "px-6 space-y-4  border-2 md:w-1/3")}>
        <div className="w-40 h-40 overflow-hidden border-2 border-metro">
          <Image
            src={"/images/me.jpeg"}
            alt="Me"
            className="object-cover w-full h-full object-[0%_35%]"
            width={160}
            height={160}
            quality={25}
            draggable={false}
          />
        </div>
        <h3 className="text-2xl font-bold">About me</h3>
        <p>
          My name is Mitul Shah, I am a photographer based out of Toronto,
          Canada dedicated to defining thoughtful and memorable experiences
          through every capture.
        </p>
        <p>
          My work has consistently drawn inspiration from our ever-changing
          environments, aiming to preserve them in a manner that will be
          remembered for years to come.
        </p>
        <p>
          Thank you for visiting. You can explore more of my work on my
          portfolio →{" "}
          <Link href="/" passHref>
            <a target="_blank" className="hover:underline underline-offset-4">
              typicalmitul.com
            </a>
          </Link>
        </p>

        <ul className="fixed bottom-0 left-0 flex w-full px-4 py-2 text-sm bg-white border-t xs:text-lg xs:px-0 xs:border-none xs:relative xs:block border-metro gap-x-6">
          <li>
            <a
              href="https://twitter.com/typicalmitul"
              target="_blank"
              className="hover:underline underline-offset-4"
              onClick={() =>
                splitbee.track("Social Click", {
                  location: "Twitter",
                })
              }
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/typicalmitul"
              target="_blank"
              className="hover:underline underline-offset-4"
              onClick={() =>
                splitbee.track("Social Click", {
                  location: "Instagram",
                })
              }
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://tiktok.com/@typicalmitul"
              target="_blank"
              className="hover:underline underline-offset-4"
              onClick={() =>
                splitbee.track("Social Click", {
                  location: "TikTok",
                })
              }
            >
              TikTok
            </a>
          </li>
          <li>
            <a
              href="mailto:typicalmitul@gmail.com"
              target="_blank"
              className="hover:underline underline-offset-4"
              onClick={() =>
                splitbee.track("Social Click", {
                  location: "Email",
                })
              }
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export const Modal = ({ open, setOpen, children }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <Face.Front id="front">
        <DialogOverlay className="fixed inset-0 w-screen h-screen" />
        <DialogContent className="fixed left-[50%] top-[50%] w-full max-w-7xl gap-6 h-full sm:h-[90%] z-50 md:flex -translate-x-1/2 -translate-y-1/2 duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] overflow-auto">
          {children}
          <DialogClose className="absolute top-0 right-0 p-2 text-white bg-metro">
            <X className="shrink-0" aria-label="Close modal" />
          </DialogClose>
        </DialogContent>
      </Face.Front>
    </Dialog>
  );
};

const Content = ({ images }) => {
  const [layout, setLayout] = React.useState(LAYOUTS.LIST);
  const { setDialogOpen } = React.useContext(Face.Context);

  return (
    <>
      <div className="flex flex-col items-center max-w-[95%] mx-auto 2xl:max-w-screen-2xl text-metro">
        <div className="w-full mt-6 bg-white border-2 md:mt-12 border-metro">
          <div className="items-end w-full py-6 px-4 sm:p-6 lg:grid md:px-12 md:pt-12 md:pb-14 gap-x-8 gap-y-1 grid-cols-[min-content_auto]">
            <h1 className="text-4xl font-bold tracking-tighter sm:tracking-tight sm:text-8xl md:text-9xl whitespace-nowrap">
              Montreal <br />
              in Motion
            </h1>

            <p
              className="block max-w-prose mb-2.5 mt-4 sm:mt-0 text-lg sm:text-xl md:text-3xl text-metro"
              style={{
                textWrap: "balance",
              }}
            >
              A documentation of the Montreal metro system. All photos were
              captured between December 2021 and January 2022, while the city
              was under lockdown and curfew.
            </p>

            <span className="col-start-2 md:text-xl">
              Captured by{" "}
              <a
                href="https://twitter.com/typicalmitul"
                target="_blank"
                className="hover:underline underline-offset-4"
              >
                Mitul Shah (@typicalmitul)
              </a>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-start w-full gap-2 px-4 py-3 bg-white border-2 border-t-0 lg:py-2 text-md lg:p-2 text-metro border-metro">
          <div className="flex w-full gap-2 sm:w-fit">
            <button
              className={button()}
              onClick={() => {
                setDialogOpen(true);
                splitbee.track("About Modal", {
                  location: "Montreal in Motion",
                });
              }}
            >
              About the Project
            </button>
            <Link href="/" passHref>
              <a target="_blank" className={button()}>
                Portfolio
                <ArrowUpRight className="shrink-0" weight="bold" />
              </a>
            </Link>
          </div>

          <a
            href="https://twitter.com/typicalmitul"
            target="_blank"
            className={cx(button({ variant: "secondary" }), "md:ml-auto")}
            aria-label="Twitter profile"
            onClick={() =>
              splitbee.track("Social Click", {
                location: "Twitter",
              })
            }
          >
            <TwitterLogo />
          </a>
          <a
            href="https://instagram.com/typicalmitul"
            target="_blank"
            className={button({ variant: "secondary" })}
            aria-label="Instagram profile"
            onClick={() =>
              splitbee.track("Social Click", {
                location: "Instagram",
              })
            }
          >
            <InstagramLogo />
          </a>
          <a
            href="https://tiktok.com/@typicalmitul"
            target="_blank"
            className={button({ variant: "secondary" })}
            aria-label="TiKTok profile"
            onClick={() =>
              splitbee.track("Social Click", {
                location: "TikTok",
              })
            }
          >
            <TiktokLogo />
          </a>
          <a
            href="mailto:typicalmitul@gmail.com"
            className={button({ variant: "secondary" })}
            aria-label="Email me"
            onClick={() =>
              splitbee.track("Social Click", {
                location: "Email",
              })
            }
          >
            <EnvelopeSimple />
          </a>
        </div>

        <div className="flex justify-between w-full px-4 py-2 mt-12 mb-2 font-semibold uppercase bg-white border-2 border-metro">
          <span>Layout</span>
          <div className="flex gap-x-2">
            <button
              className="flex items-center uppercase gap-x-1"
              onClick={() => {
                setLayout(LAYOUTS.LIST);
              }}
            >
              <Rows />
              List
            </button>
            <button
              className="flex items-center uppercase gap-x-1"
              onClick={() => {
                setLayout(LAYOUTS.GRID);
              }}
            >
              <SquaresFour />
              Grid
            </button>
          </div>
        </div>

        <div
          className={cx(
            "gap-4 lg:gap-12 mx-auto bg-white p-4 lg:p-12 border-2 border-metro grid w-full",
            layout === LAYOUTS.LIST
              ? "grid-cols-1"
              : " grid-cols-2 lg:grid-cols-3"
          )}
        >
          {images.map(
            ({
              id,
              public_id,
              format,
              width,
              height,
              blurDataUrl,
              title,
              alt,
            }) => {
              return (
                <div
                  key={id}
                  className="relative flex flex-col mx-auto overflow-hidden border-2 border-metro group aspect-[5/3] group"
                >
                  <Image
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2040/${public_id}.${format}`}
                    alt={alt}
                    blurDataURL={blurDataUrl}
                    placeholder="blur"
                    className="object-cover w-full h-full"
                    width={width}
                    height={height}
                    draggable={false}
                  />
                  {title && (
                    <div className="absolute top-0 left-0 flex items-start justify-start w-full h-full transition-all opacity-0 group-hover:opacity-100">
                      <div className="px-2 py-1 my-2 ml-2 text-sm text-gray-100 sm:ml-4 sm:my-4 sm:px-4 sm:font-bold bg-black/20 backdrop-blur-sm">
                        {title}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
const Page = ({ images }) => {
  const { dialogOpen, setDialogOpen } = React.useContext(Face.Context);
  const hasTouchScreen = useTouchScreen();

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚇</text></svg>"
        />
      </Head>
      <NextSeo
        title="Montreal in Motion"
        description="A documentation of the brutalist and distinctly designed Montreal metro stations. Captured by photographer Mitul Shah."
        canonical="https://typicalmitul.com/montreal-in-motion"
        openGraph={{
          type: "website",
          url: "https://typicalmitul.com/montreal-in-motion",
          title: "Montreal in Motion by Mitul Shah",
          description:
            "A documentation of the brutalist and distinctly designed Montreal metro stations. Captured by photographer Mitul Shah.",
          images: [
            {
              url: "https://typicalmitul.com/images/og-mtl.png",
              width: 1200,
              height: 630,
              alt: "Montreal in Motion by Mitul Shah",
              type: "image/png",
            },
          ],
        }}
      />

      <Face.Scroll id="main">
        <Content images={images} />
      </Face.Scroll>
      {!hasTouchScreen && (
        <>
          <Face.Scroll id="top">
            <Content images={images} />
          </Face.Scroll>
          <Face.Scroll id="bottom">
            <Content images={images} />
          </Face.Scroll>
          <Face.Side side="left" />
          <Face.Side side="right" />
        </>
      )}
      {!hasTouchScreen ? (
        <Modal open={dialogOpen} setOpen={setDialogOpen}>
          <AboutContent />
        </Modal>
      ) : (
        <Sheet open={dialogOpen} setDialogOpen={setDialogOpen}>
          <AboutContent />
        </Sheet>
      )}
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return (
    <Face.Provider>
      <CubeContainer>{page}</CubeContainer>
      <Analytics />
    </Face.Provider>
  );
};

export default Page;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:metro/*`)
    .with_field("context")
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  let reducedResults = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      filename: result.filename,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
      alt: result.context?.alt ?? "",
      title: result.context?.caption ?? "",
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
