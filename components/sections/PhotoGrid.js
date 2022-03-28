

const images = [
  {
    key: 1,
    src: "https://mitul.ca/media/photos/about/2.jpg",
    alt: "me",
  },
  {
    key: 2,
    src: "https://mitul.ca/media/photos/about/1.jpg",
    alt: "me",
  },
  {
    key: 3,
    src: "https://mitul.ca/media/photos/about/3.jpg",
    alt: "me",
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
    src: "https://mitul.ca/media/photos/6.webp",
    alt: "me",
  },
];

import * as React from "react";
import NextImage from "next/image"
import { ButtonLink } from "../Button";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

// export const Image = ({ src }) => {
//   const [isOpen, setOpen] = useState(false);
      

//   return (
//     <div className={`image-container ${isOpen ? "open" : ""}`}>
//       <motion.div
//         animate={{ opacity: isOpen ? 1 : 0 }}
//         transition={transition}
//         className="shade"
//         onClick={() => setOpen(false)}
//       />
//       <motion.img
//         src={src}
//         alt="Bimhuis in Amsterdam"
//         onClick={() => setOpen(!isOpen)}
//         layout
//         transition={transition}
//       />
//     </div>
//   );
// };


const PhotoGrid = () => {
  const [selectedId, setSelectedId] = React.useState(null);
  return (
    <>
      <div className="grid h-auto grid-cols-6 gap-yeat">
        {images.map((image) => (
          <div
            key={image.key}
            className={`relative w-full overflow-hidden rounded-lg border border-stone shadow hover:ring hover:ring-yolk/50 transition-all group-hover:shadow-yolk group-hover:blur group-hover:brightness-50 duration-500 photo-grid-item`}
          >
            <NextImage src={image.src} layout="fill" objectFit="cover" />
          </div>
        ))}
        {/* <div className="grid col-span-2 border rounded-lg border-yolk bg-stone place-content-center">
          Seee more
        </div> */}
      </div>
      <div className="mt-yeat"></div>
      <ButtonLink>See More</ButtonLink>
    </>
  );
};

export default PhotoGrid;
