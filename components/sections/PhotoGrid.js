
import { Button, Image } from "@components";
import React from "react"
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Portal } from "@radix-ui/react-portal"

import lookup from "../../public/images/lookup.jpg";
import tower_clouds from "../../public/images/tower_clouds.jpg";
// import nyc_lookdown from "../../public/images nyc_lookdown.jpg";
import la from "../../public/images/la.jpg";

import { motion } from "framer-motion";
import NextFutureImage from "next/future/image";

const images = [
  {
    key: 1,
    src: la,
    dialogSrc: la,
    alt: "Old school Cadillac parked on a sunny LA day",
  },
  {
    key: 2,
    src: tower_clouds,
    dialogSrc: tower_clouds,
    alt: "me",
  },
  {
    key: 3,
    src: lookup,
    dialogSrc: lookup,
    alt: "Looking up at golden lights in Toronto's financial district",
  },
  {
    key: 4,
    src: tower_clouds,
    dialogSrc: tower_clouds,
    alt: "me",
  },
  {
    key: 5,
    src: tower_clouds,
    dialogSrc: tower_clouds,
    alt: "me",
  },
  {
    key: 6,
    src: tower_clouds,
    dialogSrc: tower_clouds,
    alt: "me",
  },
  {
    key: 7,
    src: tower_clouds,
    dialogSrc: tower_clouds,
    alt: "The CN Tower appearing above the clouds",
  },
  {
    key: 8,
    src: tower_clouds,
    dialogSrc: tower_clouds,
    alt: "me",
  },
];


const MotionOverlay = motion(DialogOverlay)

const PhotoGrid = () => {
  const [ open, setOpen ] = React.useState(false);
  
  return (
    <>
      <div className="grid h-auto grid-cols-2 sm:grid-cols-6 gap-yeat sm-g">
        <Dialog open={open} onOpenChange={setOpen}>
          {images.map((image) => (
            <>
              <button
                key={image.key}
                onClick={() => setOpen(true)}
                className="photo-grid-item"
              >
                <Image
                  src={image.src}
                  // className="photo-grid-item"
                  alt={image.alt}
                  quality={50}
                  priority
                  placeholder="blur"
                />
              </button>
            </>
          ))}
          <DialogPortal>
            <MotionOverlay
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <DialogContent className="fixed inset-0 my-auto outline-none h-fit w-fit">
              <div
                className="px-6 overflow-x-auto outline-none carousel-scroll-container snap-x snap-proximity scroll-smooth scroll-snap"
                role="region"
                aria-label="Image carousel"
                tabIndex={0}
              >
                <ol className="flex gap-12 carousel-media" role="list">
                  {images.map((image2) => {
                    return (
                      <li
                        key={image2.key}
                        className="carousel-item shrink-0 relative block w-auto h-[800px] snap-center"
                      >
                        <NextFutureImage
                          src={image2.src}
                          className="block w-auto h-full first-of-type:snap-start last-of-type:snap-end"
                        />
                      </li>
                    );
                  })}
                </ol>
              </div>
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

