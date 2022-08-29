import { Button, Image } from "@components";
import lookup from "../../public/images/lookup.jpg";
import tower_clouds from "../../public/images/tower_clouds.jpg";
import la from "../../public/images/la.jpg";
import karen from "../../public/images/karen.jpg";
import nyc_ts from "../../public/images/nyc_ts.jpg";
import grid_light from "../../public/images/grid_light.jpg"
import cn_shangri from "../../public/images/cn_shangri.jpg";
import jay_lookup from "../../public/images/jay_lookup.jpg";
import walker from "../../public/images/walker.jpg";
import { Dialog, DialogTrigger, DialogContent, DialogOverlay, DialogPortal } from "@radix-ui/react-dialog";
import NextImage from "next/image";
import NextFutureImage from "next/future/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion"
import { cx } from "class-variance-authority"

const images = [
  {
    key: 1,
    src: la,
    alt: "Old school Cadillac parked on a sunny LA day",
  },
  {
    key: 2,
    src: jay_lookup,
    alt: "me",
  },
  {
    key: 3,
    src: lookup,
    alt: "Looking up at golden lights in Toronto's financial district",
    vertical: true,
  },
  {
    key: 4,
    src: nyc_ts,
    alt: "me",
  },
  {
    key: 5,
    src: grid_light,
    alt: "me",
  },
  {
    key: 6,
    src: karen,
    alt: "me",
  },
  {
    key: 7,
    src: tower_clouds,
    position: "top",
    alt: "The CN Tower appearing above the clouds",
    vertical: true,
  },
  {
    key: 8,
    src: walker,
    alt: "me",
  },
];


const Image2 = React.forwardRef(({ src, alt, ...props }, forwardRef) => (
    <NextImage
      src={src}
      alt={alt}
      ref={forwardRef}
      layout="fill"
      objectFit="cover"
      className={"transition duration-500 betterhover:hover:scale-[1.03]"}
      {...props}
    />
));

  Image2.displayName = "Image2"

const PhotoGrid = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="grid h-auto grid-cols-2 sm:grid-cols-6 gap-yeat sm-g">
        {images.map((image) => {
          return (
          <Dialog key={image.key}>
            <DialogTrigger
              className="relative w-full overflow-hidden transition-all duration-500 border rounded-lg shadow betterhover:hover:shadow-xl betterhover:hover:shadow-yolk/50 betterhover:hover:border-yolk border-stone photo-grid-item"
              onClick={() => setOpen(true)}
            >
              <Image2
                src={image.src}
                alt={image.alt}
                objectPosition={image.position}
                quality={50}
                priority
                placeholder="blur"
              />
            </DialogTrigger>
            
              <DialogPortal>
                <DialogOverlay className="fixed inset-0 bg-black/75 backdrop-blur-md">
                </DialogOverlay>
                <DialogContent className="fixed inset-0 mx-auto my-auto rounded shadow outline-none h-fit w-fit">
                  <motion.div
                    className={cx(
                      "relative w-auto sm:h-[800px]",
                      image.vertical ? "h-[500px]" : "h-[250px]"
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
                      src={image.src}
                      alt={image.alt}
                      className="w-auto h-full rounded shadow-md"
                      placeholder="blur"
                    />
                  </motion.div>
                </DialogContent>
              </DialogPortal>
            
          </Dialog>
        )})}
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
