import { ArrowRight } from "phosphor-react";

const images = [
  {
    key: 1,
    src: "/images/la.jpg",
    alt: "Old school Cadillac parked on a sunny LA day",
  },
  {
    key: 2,
    src: "https://mitul.ca/media/photos/about/1.jpg",
    alt: "me",
  },
  {
    key: 3,
    src: "/images/lookup.jpg",
    alt: "Looking up at golden lights in Toronto's financial district",
  },
  {
    key: 4,
    src: "https://mitul.ca/media/photos/about/4.jpg",
    alt: "me",
  },
  {
    key: 5,
    src: "https://mitul.ca/media/photos/3.webp",
    alt: "me",
  },
  {
    key: 6,
    src: "https://mitul.ca/media/photos/about/5.jpg",
    alt: "me",
  },
  {
    key: 7,
    src: "/images/tower_clouds.jpg",
    alt: "The CN Tower appearing above the clouds",
  },
  {
    key: 8,
    src: "https://mitul.ca/media/photos/6.webp",
    alt: "me",
  },
];

import * as React from "react";
import { Button, Image } from "@components";

const PhotoGrid = () => {
  return (
    <>
      <div className="grid h-auto grid-cols-2 sm:grid-cols-6 gap-yeat sm-g">
        {images.map((image) => (
          <Image
            src={image.src}
            className="photo-grid-item"
            key={image.key}
            alt={image.alt}
            // placeholder="blur"
          />
        ))}
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
