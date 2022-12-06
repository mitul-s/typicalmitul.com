import lookup from "../../public/images/golden-lights-toronto-lookup.jpg";
import tower_clouds from "../../public/images/cn-tower-in-the-clouds.jpg";
import la from "../../public/images/old-school-cadillac.jpg";
import karen from "../../public/images/female-model-dark-room-highlighted.jpg";
import nyc_ts from "../../public/images/new-york-city-times-square.jpg";
import grid_light from "../../public/images/sunlight-through-skyscrapers.jpg";
import jay_lookup from "../../public/images/blue-jays-hat-lookup.jpg";
import walker from "../../public/images/crossing-the-road.jpg";
import { Dialog, DialogTrigger, DialogContent, DialogOverlay, DialogPortal } from "@radix-ui/react-dialog";
import NextImage from "next/image";
import NextFutureImage from "next/future/image";
import React from "react";
import { motion } from "framer-motion"
import { cx } from "class-variance-authority"
import splitbee from "@splitbee/web";

const images = [
  {
    key: 1,
    src: la,
    title: "Old School Cadillac",
    alt: "An old school Cadillac parked in front of a driveway in Los Angeles with blue skies and a tree in the background",
  },
  {
    key: 2,
    src: jay_lookup,
    title: "Blue Jays Lookup",
    alt: "A man wearing a Blue Jays hat looking up at a golden coloured skyscraper in Toronto, Canada with a camera in his hand",
  },
  {
    key: 3,
    src: lookup,
    title: "Toronto Classic Lookup",
    alt: "Looking up at the skyscrapers in Toronto, Canada's financial district. Corner of a building with golden ceiling lights.",
    vertical: true,
  },
  {
    key: 4,
    src: nyc_ts,
    title: "Above Times Square",
    alt: "A man sitting on top of a building looking down and taking a photo of New York City's Times Square at night",
  },
  {
    key: 5,
    src: grid_light,
    title: "Grid Light",
    alt: "Patterned skyscrapers in Toronto, Canada standing close together with the sunlight shining through the middle of them",
  },
  {
    key: 6,
    src: karen,
    title: "Karen's Contrast",
    alt: "Female model standing in a dark room being highlighted from sunshine coming through the window. Extreme juxtaposition.",
  },
  {
    key: 7,
    src: tower_clouds,
    position: "top",
    title: "Above the Clouds",
    alt: "A photo of the top of half of the CN Tower in Toronto, Canada, standing tall above the clouds with a blue sky",
    vertical: true,
  },
  {
    key: 8,
    src: walker,
    title: "Slow Walker",
    alt: "A long exposure of a man crossing the road in Toronto's financial district with two transit streetcars passing in the background",
  },
];


const Image2 = ({ src, alt, ...props }) => (
    <NextImage
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className={"transition duration-500 betterhover:hover:scale-[1.03]"}
      {...props}
    />
);

Image2.displayName = "Image2"

const PhotoGrid = () => {

  const [selected, setSelected] = React.useState();

  return (
    <>
      <div className="grid h-auto grid-cols-2 sm:grid-cols-6 gap-yeat sm-g">
        <Dialog>
          {images.map((image) => {
            return (
              <DialogTrigger
                key={image.key}
                className="relative w-full overflow-hidden transition-all duration-500 border rounded-lg shadow betterhover:hover:shadow-xl betterhover:hover:shadow-yolk/50 betterhover:hover:border-yolk border-stone photo-grid-item"
                onClick={() => {setSelected(image.key); splitbee.track("Open Photo", { title: image.title })}}
              >
                <Image2
                  src={image.src}
                  alt={image.alt}
                  objectPosition={image.position}
                  quality={25}
                  priority
                  placeholder="blur"
                />
              </DialogTrigger>
            );
          })}
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black/75 backdrop-blur-md rdx-state-open:overlay-fade-in rdx-state-closed:overlay-fade-out" />
            <DialogContent
              className="fixed inset-0 mx-auto my-auto rounded shadow outline-none h-fit w-fit rdx-state-open:dialog-item-open rdx-state-closed:dialog-item-close"
              onCloseAutoFocus={(e) => e.preventDefault()
              }
            >
              {images.map((i) => {
                if (i.key === selected) {
                  return (
                    <motion.div
                      key={i.key}
                      className={cx(
                        "relative w-auto sm:h-[800px]",
                        i.vertical ? "h-[500px]" : "h-[250px]"
                      )}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    >
                      <NextFutureImage
                        src={i.src}
                        alt={i.alt}
                        className="w-auto h-full rounded shadow-md"
                        placeholder="blur"
                        priority
                        quality={25}
                      />
                    </motion.div>
                  );
                }
              })}
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
      <div className="mt-yeat"></div>
      {/* To do */}
      {/* <Button fullWidth asAnchor>
        See More
        <ArrowRight weight="bold" />
      </Button> */}
    </>
  );
};

export default PhotoGrid;
