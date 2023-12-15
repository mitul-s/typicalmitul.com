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
} from "phosphor-react";
import { cva, cx } from "class-variance-authority";
import * as Face from "@/components/metro/Face";
import { CubeContainer } from "@/components/metro/components";
import { Dialog, DialogOverlay, DialogContent } from "@radix-ui/react-dialog";
import { NextSeo } from "next-seo";
import useTouchScreen from "@/hooks/useHasTouchScreen";

const LAYOUTS = {
  LIST: "LIST",
  GRID: "GRID",
};

const button = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "p-1",
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
    "gap-x-2",
  ],
  {
    variants: {
      variant: { primary: "", secondary: "" },
    },
  }
);

export const Modal = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <Face.Front id="front">
        <DialogOverlay className="fixed inset-0 w-screen h-screen" />
        <DialogContent className="fixed left-[50%] top-[50%] w-full max-w-[840px] py-12 h-full z-50 grid translate-x-[-50%] translate-y-[-50%] duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] overflow-auto">
          <div className="h-full px-12 py-12 bg-white border-2 shadow-xl border-metro text-metro">
            <h2 className="text-5xl font-bold">About the project</h2>
            <div className="flex flex-col mt-6 text-xl gap-y-3 max-w-prose">
              <p>
                Montreal has forever been one of my favourite cities, for it’s
                food, arts and most notably, the Metro system. Since my first
                visit, I’ve been fascinated by distinct architectural
                differences and art installations in each station.
              </p>
              <p>
                At the end of 2021, I made the decisions to spend 30 days
                through the new year to capture the essence of both the city
                itself and my favourite metro stations.
              </p>
              <p>
                This project captures the stations from my perspective, from a
                time where the city was quieter and the streets were less
                crowded. Each station tells a unique story through its designs
                and artwork, mirroring the rich cultural diversity of Montreal.
              </p>
              <h3 className="mt-4 text-2xl font-bold">About me</h3>
              <p>
                My name is Mitul Shah, I am a photographer based out of Toronto,
                Canada. Spei
              </p>
              <h3 className="mt-4 text-2xl font-bold">Informational</h3>
              <p>
                All photos were taken on a Sony A7C with a Sigma 24-70m f/2.8
                lens. Any long exposure was hand-held.
              </p>
              <p>
                This website was designed and built by myself, I attempted to
                keep it in line with the theme of Montreal&apos;s brutalist
                stations.
              </p>
              <p>
                You can visit my portfolio at https://typicalmitul.com, and feel
                free to contact me if you have any questions about the project.
              </p>
            </div>
          </div>
        </DialogContent>
      </Face.Front>
    </Dialog>
  );
};

const Page = ({ images }) => {
  const [layout, setLayout] = React.useState(LAYOUTS.LIST);
  const { dialogOpen, setDialogOpen } = React.useContext(Face.Context);
  const hasTouchScreen = useTouchScreen();

  const Content = () => {
    return (
      <>
        <div className="flex flex-col items-center px-2 mx-auto md:px-6 xl:px-0 max-w-screen-2xl text-metro">
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
                  Mitul Shah
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-start w-full gap-2 p-4 bg-white border-2 border-t-0 text-md text-metro border-metro">
            <button
              className={button()}
              onClick={() => {
                setDialogOpen(true);
              }}
            >
              About the project
            </button>
            <Link href="/" passHref>
              <a target="_blank" className={button()}>
                See the portfolio
              </a>
            </Link>

            <a
              href="https://twitter.com/typicalmitul"
              target="_blank"
              className={cx(button(), "md:ml-auto")}
            >
              Twitter
              <TwitterLogo />
            </a>
            <a
              href="https://instagram.com/typicalmitul"
              target="_blank"
              className={button()}
            >
              Instagram
              <InstagramLogo />
            </a>
            <a href="mailto:typicalmitul@gmail.com" className={button()}>
              Get in touch
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
              "gap-6 lg:gap-12 mx-auto bg-white p-6 lg:p-12 border-2 border-metro grid",
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
                filename,
                blurDataUrl,
              }) => {
                return (
                  <div
                    key={id}
                    className="relative flex flex-col w-full h-full mx-auto overflow-hidden border-2 cursor-pointer border-metro group aspect-[5/3]"
                  >
                    <Image
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2040/${public_id}.${format}`}
                      alt=""
                      blurDataURL={blurDataUrl}
                      placeholder="blur"
                      className="object-cover w-full h-full"
                      width={width}
                      height={height}
                      draggable={false}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <NextSeo
        title="Montreal in Motion"
        description=""
        canonical="https://typicalmitul.com/montreal-in-motion"
      />
      <Face.Scroll id="main">
        <Content />
      </Face.Scroll>
      {!hasTouchScreen && (
        <>
          <Face.Scroll id="top">
            <Content />
          </Face.Scroll>
          <Face.Scroll id="bottom">
            <Content />
          </Face.Scroll>
          <Face.Side side="left" />
          <Face.Side side="right" />
        </>
      )}
      <Modal open={dialogOpen} setOpen={setDialogOpen} />
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return (
    <Face.Provider>
      <CubeContainer>{page}</CubeContainer>
    </Face.Provider>
  );
};

export default Page;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:metro/*`)
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
