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
import { NextSeo } from "next-seo";
import useTouchScreen from "@/hooks/useHasTouchScreen";
import useEmblaCarousel from "embla-carousel-react";

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
    "self-stretch",
  ],
  {
    variants: {
      variant: { primary: "", secondary: "" },
    },
  }
);

const Carousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="overflow-hidden">
      <div id="viewport" className="relative h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image) => {
            return (
              <div
                key={image.id}
                className="flex w-full h-[92%] min-w-0 min-h-0 basis-full shrink-0 grow-0"
              >
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2040/${image.public_id}.${image.format}`}
                  alt=""
                  blurDataURL={image.blurDataUrl}
                  placeholder="blur"
                  className="object-cover w-full h-full"
                  width={image.width}
                  height={image.height}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-50 flex rounded gap-x-6 isolate">
        <button className="text-white bg-black rounded " onClick={scrollPrev}>
          Prev
        </button>
        <button className="text-white bg-black rounded " onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export const Modal = ({ open, setOpen, children }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <Face.Front id="front">
        <DialogOverlay className="fixed inset-0 w-screen h-screen" />
        <DialogContent className="fixed left-[50%] top-[50%] w-full max-w-7xl gap-6 h-[90%] z-50 flex translate-x-[-50%] translate-y-[-50%] duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] overflow-auto">
          {children}
          <DialogClose className="absolute top-0 right-0 p-2 text-white bg-metro">
            <X className="shrink-0" aria-label="Close modal" />
          </DialogClose>
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
                  Mitul Shah
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-start w-full gap-2 p-4 bg-white border-2 border-t-0 lg:p-2 text-md text-metro border-metro">
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
              <TwitterLogo />
            </a>
            <a
              href="https://instagram.com/typicalmitul"
              target="_blank"
              className={button()}
            >
              <InstagramLogo />
            </a>
            <a
              href="https://tiktok.com/typicalmitul"
              target="_blank"
              className={button()}
            >
              <TiktokLogo />
            </a>
            <a href="mailto:typicalmitul@gmail.com" className={button()}>
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
              "gap-4 lg:gap-12 mx-auto bg-white p-4 lg:p-12 border-2 border-metro grid",
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
                    className="relative flex flex-col w-full h-full mx-auto overflow-hidden border-2 border-metro group aspect-[5/3]"
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
      <Modal open={dialogOpen} setOpen={setDialogOpen}>
        <Carousel images={images} />
      </Modal>
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
