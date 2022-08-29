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
  },
  {
    key: 8,
    src: walker,
    alt: "me",
  },
];

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
            objectPosition={image.position}
            quality={50}
            priority
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
