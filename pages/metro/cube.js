import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import { cx } from "class-variance-authority";
import Image from "next/image";
import {
  ArrowRight,
  InstagramLogo,
  Rows,
  SquaresFour,
  TwitterLogo,
} from "phosphor-react";
import React from "react";
import Link from "next/link";

import { CubeContainer, Face } from "@/components/metro/components";

const LAYOUTS = {
  LIST: "LIST",
  GRID: "GRID",
};

const Page = ({ images }) => {
  const [layout, setLayout] = React.useState(LAYOUTS.LIST);

  const Content = () => {
    return (
      <>
        <div className="flex flex-col items-center max-w-screen-xl mx-auto text-metro">
          <div className="w-full mt-6 bg-white border-2 md:mt-12 border-metro">
            <div
              className="items-end w-full p-6 md:grid md:px-12 md:pt-12 md:pb-14 gap-x-8 gap-y-1"
              style={{
                gridTemplateColumns: "min-content auto",
              }}
            >
              <h1 className="font-bold tracking-tight text-8xl md:text-9xl whitespace-nowrap">
                Montreal <br />
                in Motion
              </h1>

              <p
                className="block max-w-prose mb-2.5 text-xl md:text-2xl text-metro"
                style={{
                  textWrap: "balance",
                }}
              >
                A documentation of the Montreal metro system. All photos were
                captured between December 2021 and January 2022, while the city
                was under lockdown and curfew.
              </p>

              <span className="col-start-2 text-xl">
                Captured by Mitul Shah
              </span>

              {/* <Link href="about" passHref>
                <a className="col-start-2 flex items-center gap-x-1.5 leading-none bg-metro text-white h-full py-3 px-4 w-fit">
                  Learn More <ArrowRight weight="bold" />
                </a>
              </Link> */}
            </div>
          </div>

          <div className="z-50 flex items-start w-full gap-2 p-2 bg-white border-2 shadow-md left-24 top-12 text-metro border-metro">
            <Link href="about" passHref>
              <a className="p-1 px-2 text-white bg-metro">About the project</a>
            </Link>
            <button className="p-1 px-2 text-white bg-metro">
              Get in touch
            </button>

            <a
              href="https://twitter.com/typicalmitul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center p-1 px-2 ml-auto text-white gap-x-2 bg-metro"
            >
              Twitter
              <TwitterLogo />
            </a>
            <a
              href="https://instagram.com/typicalmitul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center p-1 px-2 text-white gap-x-2 bg-metro"
              style={{}}
            >
              Instagram
              <InstagramLogo />
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
              "gap-12 mx-auto bg-white p-12 border-2 border-metro",
              layout === LAYOUTS.LIST ? "flex flex-col" : "grid grid-cols-3"
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
                    className="relative flex flex-col w-full h-full mx-auto overflow-hidden border-2 cursor-pointer border-metro group"
                  >
                    <Image
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2040/${public_id}.${format}`}
                      alt=""
                      blurDataURL={blurDataUrl}
                      placeholder="blur"
                      className=""
                      width={width}
                      height={height}
                      draggable={false}
                      quality={100}
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
      <Face id="main">
        <Content />
      </Face>
      <Face id="top">
        <Content />
      </Face>
      <Face id="bottom">
        <Content />
      </Face>
      <Face id="left" />
      <Face id="right" />
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <CubeContainer>{page}</CubeContainer>;
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
