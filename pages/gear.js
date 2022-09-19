import Break from "@/components/sections/Break";
import { NextSeo } from "next-seo";
import NextImage from "next/future/image"
import { Heading } from "../components";
import sonyA7C from "../public/images/gear/sony-alpha-7c-full-frame-camera.png";
import canon1635 from "../public/images/gear/Canon-EF-16-35mm-f4L-IS-USM.png";
import jay_lookup from "../public/images/blue-jays-hat-lookup.jpg";
import Footer from "@/components/sections/Footer";

const gear_data = {
  camera: [
    {
      heading: "Camera Body",
      title: "Sony Alpha 7C",
      longTitle:
        "Sony Alpha 7C Full-Frame Mirrorless Interchangeable-Lens Camera",
      subtitle: "The smallest full-frame camera out there, and it’s perfect.",
      shortDesc: "Something something something something something something",
      description:
        "The Sony A7C has incredible autofocus so you never miss a shot, and as with any Sony camera, you can shoot the ISO through the roof without a sweat. It has a great rangefinder inspired design, and although the viewfinder is on the smaller side, I’ve never had an issue with it.",
      href: "https://amzn.to/3SczhyS",
      image: sonyA7C,
      imageAlt: "",
      tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
    },
  ],
  lenses: [
    {
      heading: "Lens",
      title: "Sigma 24-70mm f/2.8",
      longTitle: "Sigma 24-70mm f/2.8 DG DN Art Lens for Sony E-Mount Cameras",
      subtitle: "Versatile, sharp and fast. What more can you ask for?",
      shortDesc:
        "This lens stays on my camera 90% of the time. It's has the best performance and offers high resolution throughout the entire zoom range.",
      href: "https://amzn.to/3SadLv7",
      image: sonyA7C,
      imageAlt: "",
      tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
    },
    {
      heading: "Lens",
      title: "Canon 16-35mm f/4",
      longTitle: "Canon EF 16-35mm f/4L IS USM Lens",
      shortDesc:
        "A wide angle lens is a must-have when shooting architecture or landscapes. I've taken my most popular photos with this lens.",
      href: "https://amzn.to/3dm7s8m",
      image: canon1635,
      imageAlt: "",
      tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
    },
    // {
    //   heading: "Lens",
    //   title: "Sigma 35mm f/1.4",
    //   longTitle: "Sigma 35mm f/1.4 DG DN Art Lens for Sony E-Mount Cameras",
    //   shortDesc:
    //     "I’ve never been one for prime lenses, but having a 35mm has been essential for street photography or for when I’m trying to pack light. The depth of field from the f/1.8 is absolutely beautiful.",
    //   href: "",
    //   image: sonyA7C,
    //   imageAlt: "",
    //   tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
    // },
  ],
  drone: {
    heading: "Drone",
    title: "DJI Mavic Air 2",
    longTitle: "DJI Mavic Air 2",
    subtitle: "The best drone for the price.",
    shortDesc: "The best drone for the price.",
    description:
      "The DJI Mavic Air 2 is the best drone for the price. It has a 48MP camera, 34 minutes of flight time, and a 4K video recording capability. It’s also super easy to fly and has a great range.",
    href: "https://amzn.to/3Sb9Z9M",
    image: sonyA7C,
    imageAlt: "",
    tags: ["DJI", "Mavic", "Air", "2"],
  },
};


// content to add: 
// - Sony A7C - Camera Body
// - Lenses 
// 	- 24-70mm f 2.8
// 	- 16-35mm
// 	- 35mm 1.8
// - Drone
// 	- DJI Mavic Mini
// 	- DJI Fly More Kit

// - Accessories
// - SD Card
// - Peak Design Clip
// - Neewer Batteries and Charger
// - Backpack
// - Hoya Polarizer Filter
// - Multi Port adapter
// - SSD



const GearItem = ({ heading, image, title, subtitle, href, description, imageAlt }) => {
    return (
      <div className="grid py-6 md:grid-cols-2 gap-x-12">
        <span className="text-xs uppercase col-span-full text-stone">
          {heading}
        </span>
        <div className="grid w-full bg-white border rounded border-stone-light place-content-center">
          <div className="w-fit">
            <NextImage
              src={image}
              className="w-1/3 mx-auto drop-shadow-md"
              alt={imageAlt}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-9">
          <div className="max-w-screen-sm text-4xl">
            <h3 className="font-mtl-bold">{title}</h3>
            <p>{subtitle}</p>
          </div>
          <p className="max-w-screen-sm mb-12 text-xl text-stone-blue">
            {description}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="p-4 text-center border rounded bg-yolk border-yolk"
          >
            Buy now
          </a>
        </div>
      </div>
    );
}

const GearItemSmall = ({ image, imageAlt, shortDesc, title, }) => {
  return (
    <div className="flex flex-col">
      {/* <span className="text-xs uppercase text-stone">Camera Body</span> */}
      <div className="grid bg-white border rounded aspect-square border-stone-light place-content-center">
        <div className="w-fit">
          <NextImage
            src={image}
            className="w-1/2 mx-auto drop-shadow-md"
            alt={imageAlt}
          />
        </div>
      </div>
      <h3 className="mt-4 text-sm md:text-xl font-mtl-bold">{title}</h3>
      <p className="mt-0.5 mb-4 text-sm md:text-xl max-w-prose text-stone-blue">
        {shortDesc}
      </p>
      <a className="inline-block w-full p-4 mt-auto text-center rounded bg-yolk">
        Buy now
      </a>
    </div>
  );
}


const Gear = () => {
    return (
      <>
        <NextSeo title="Gear" canonical="https://typicalmitul.com/gear" />
        <main className="relative h-full pb-20">
          <div className="flex items-center px-6 py-12 md:px-4 gap-x-yeat">
            <span className="w-6 h-6 border rounded-full bg-yolk border-dark shrink-0"></span>
            <h1 className="text-5xl uppercase">Gear</h1>
          </div>
          <section className="px-4">
            <div className="text-xs text-stone">
              Disclaimer: these are affiliate links
            </div>
          </section>
          <section className="flex flex-col px-4">
            {gear_data.camera.map((item) => {
              return (
                <GearItem
                  key={item.key}
                  heading={item.heading}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  subtitle={item.subtitle}
                  href={item.href}
                  description={item.description}
                />
              );
            })}
            <Break />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-yeat md:gap-x-6">
              <Heading className="col-span-full">Lenses</Heading>
              {gear_data.lenses.map((item) => {
                return (
                  <GearItemSmall
                    key={item.key}
                    heading={item.heading}
                    image={item.image}
                    imageAlt={item.imageAlt}
                    title={item.title}
                    subtitle={item.subtitle}
                    href={item.href}
                    shortDesc={item.shortDesc}
                  />
                );
              })}
              {/* <GearItemSmall /> */}
              <div className="overflow-hidden bg-white border rounded">
                <NextImage src={jay_lookup} 
                  className="rounded"
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </div>
            </div>
          </section>
          <Break />
          <section>
            <div className="grid mx-4 mt-12 border rounded bg-yolk/10 h-96 border-yolk place-content-center">
              See the photos I&apos;ve taken with this equipment
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
}

export default Gear;