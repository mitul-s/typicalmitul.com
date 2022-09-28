import Break from "@/components/sections/Break";
import { NextSeo } from "next-seo";
import NextImage from "next/future/image"
import { Heading, Link } from "../components";
import sonyA7C from "@/images/gear/sony-alpha-7c-full-frame-camera.png";
import canon1635 from "@/images/gear/Canon-EF-16-35mm-f4L-IS-USM.png";
import dji_mini from "@/images/gear/dji-mavic-mini.png";
import sigma2470 from "@/images/gear/sigma-24-70mm-f2.8-lens.png";
import wandrd from "@/images/gear/wandrd-prvke-backpack.png";
import capture_clip from "@/images/gear/peak-design-capture-clip.png";
import hoya from "@/images/gear/hoya-circular-polarizer-filter.png";
import harddrive from "@/images/gear/easystore-desktop-hero.png";
import jay_lookup from "../public/images/blue-jays-hat-lookup.jpg";
import heart_lake from "@/images/gear/drone-photo-of-heart-lake.jpg";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "phosphor-react";
import { cx } from "class-variance-authority"

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
      href: "https://amzn.to/3LSzKUY",
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
      href: "https://amzn.to/3DWAqGU",
      image: sigma2470,
      imageAlt: "",
      tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
    },
    {
      heading: "Lens",
      title: "Canon 16-35mm f/4",
      longTitle: "Canon EF 16-35mm f/4L IS USM Lens",
      shortDesc:
        "A wide angle lens is a must-have when shooting architecture or landscapes. I've taken my most popular photos with this lens.",
      href: "https://amzn.to/3r7OV35",
      image: canon1635,
      imageAlt: "",
      tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
      scale: "sm:scale-[1.7]",
    },
    {
      heading: "Lens",
      title: "Sigma 35mm f/1.4",
      longTitle: "Sigma 35mm f/1.4 DG DN Art Lens for Sony E-Mount Cameras",
      shortDesc:
        "I’ve never been one for prime lenses, but having a 35mm has been essential for street photography or for when I’m trying to pack light. The bokeh from the f/1.8 is absolutely beautiful.",
      href: "https://amzn.to/3dLQaSk",
      image: sonyA7C,
      imageAlt: "",
      tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
    },
  ],
  drone: {
    heading: "Drone",
    title: "DJI Mavic Mini",
    longTitle: "DJI Mavic Mini",
    subtitle: "The best drone for the price.",
    shortDesc:
      "The best beginner drone available, simply because it frees you from worrying about drone restrictions. It’s affordable, takes sharp photos and allows you gain new perspectives as a photographer.",
    description:
      "The DJI Mavic Mini is the best drone for the price. It has a 48MP camera, 34 minutes of flight time, and a 4K video recording capability. It’s also super easy to fly and has a great range.",
    href: "https://amzn.to/3LILERf",
    image: dji_mini,
    imageAlt: "",
    tags: ["DJI", "Mavic", "Mini", "2"],
  },
  accessories: [
    {
      heading: "Accessory",
      title: "Peak Design Capture Clip",
      subtitle: "",
      shortDesc:
        "The Peak Design Capture Clip is a must-have for any photographer. It allows you to quickly attach your camera to a belt, backpack or bag strap.",
      description:
        "The Peak Design Capture Clip is a must-have for any photographer. It allows you to quickly attach your camera to a belt, backpack or bag strap. It’s also incredibly durable and has a great design.",
      href: "https://amzn.to/3LILERf",
      image: capture_clip,
      imageAlt: "",
      scale: "scale-125",
      tags: ["Peak", "Design", "Capture", "Clip"],
    },
    {
      heading: "Camera Filter",
      title: "Hoya Polarizing Filter",
      subtitle: "",
      shortDesc:
        "This filter is essential for removing reflections and boosting colors. Anytime I'm shooting a landscape with water or a car, I have this filter on.",
      description: "",
      href: "https://amzn.to/3Cdnew4",
      image: hoya,
      imageAlt: "",
      tags: ["Hoya", "Circular", "Polarizing", "Filter"],
      scale: "sm:scale-[1.7]",
    },
    {
      heading: "Backpack",
      title: "Wandrd PRVKE 31L Backpack",
      subtitle: "",
      shortDesc:
        "A little heavy, but it's the best camera backpack I've had. I love that can easily seperate my gear from my clothes while travelling.",
      description: "",
      href: "https://amzn.to/3UHSHgX",
      image: wandrd,
      imageAlt: "",
      tags: ["Peak", "Design", "Everyday", "Backpack"],
      scale: "scale-150",
    },
    {
      heading: "Storage",
      title: "WD EasyStore External Hard Drive",
      subtitle: "",
      shortDesc:
        "Every photo I take is backed up onto this hard drive and it never leaves my house. Backups of your backups are important!",
      description: "",
      href: "https://amzn.to/3ULfhFI",
      image: harddrive,
      imageAlt: "",
      tags: ["Samsung", "T7", "SSD"],
      scale: "scale-150",
    },
  ],
};




const GearItem = ({ heading, image, title, subtitle, href, description, imageAlt }) => {
    return (
      <div className="grid py-6 md:grid-cols-2 gap-x-12">
        <span className="text-xs uppercase col-span-full text-stone">
          {heading}
        </span>
        <div className="grid w-full bg-white border rounded border-stone-light place-content-center h-96 md:h-auto">
          <div className="w-fit">
            <NextImage
              src={image}
              className="w-1/3 mx-auto drop-shadow-md"
              alt={imageAlt}
            />
          </div>
        </div>
        <div className="flex flex-col mt-9 md:mt-0 gap-y-9">
          <div className="max-w-screen-sm text-4xl">
            <h3 className="font-mtl-bold">{title}</h3>
            <p>{subtitle}</p>
          </div>
          <p className="max-w-screen-sm text-xl md:mb-12 text-stone-blue">
            {description}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="p-4 text-center border rounded bg-yolk border-yolk"
          >
            Buy
          </a>
        </div>
      </div>
    );
}

const GearItemSmall = ({ image, href, imageAlt, scale, shortDesc, title, }) => {
  return (
    <a href={href} className="flex flex-col group">
      {/* <span className="text-xs uppercase text-stone">Camera Body</span> */}
      <div className="grid transition-all duration-300 bg-white border rounded aspect-square border-stone-light place-content-center group-hover:shadow group-hover:shadow-yolk group-hover:border-yolk">
        <div className="transition duration-300 w-fit group-hover:scale-110">
          <NextImage
            src={image}
            className={cx("w-1/2 mx-auto drop-shadow-md", scale)}
            alt={imageAlt}
          />
        </div>
      </div>
      <h3 className="mt-4 text-md font-mtl-bold">{title}</h3>
      <p className="mt-0 mb-1 md:mb-8 text-md max-w-prose text-stone-blue">
        {shortDesc}
      </p>
      {/* <a href={href} className="inline-block w-full p-4 mt-auto text-center rounded bg-yolk">
        Buy
      </a> */}
    </a>
  );
}


const Gear = () => {
    return (
      <>
        <NextSeo title="Gear" canonical="https://typicalmitul.com/gear" />
        <main className="relative h-full pb-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center px-6 py-12 md:px-4 gap-x-yeat">
              <span className="w-6 h-6 border rounded-full bg-yolk border-dark shrink-0"></span>
              <h1 className="text-5xl uppercase">Gear</h1>
            </div>
            <div className="p-1 mx-4 text-xs border rounded text-stone-blue border-stone-light max-w-prose">
              These are affiliate links, which I earn a small commission from. I
              only recommend products I use and love. Thank you for your
              support!
            </div>
          </div>

          <section className="flex flex-col px-6 md:px-4">
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

            <div className="relative w-full col-span-2 px-4 md:px-0">
              <div className="mb-2 overflow-hidden bg-white border rounded h-96 border-stone-light">
                <NextImage
                  src={jay_lookup}
                  className="rounded"
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </div>
              <span className="inline-block w-full p-1 text-sm text-center border rounded text-stone-blue">
                Photo taken on my{" "}
                <Link
                  isExternal
                  className="underline transition duration-200 cursor-pointer underline-offset-2 hover:bg-yolk/50 hover:text-dark"
                >
                  DJI Mavic Mini
                </Link>
              </span>
            </div>
            <Break />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-yeat md:gap-y-6 md:gap-x-6">
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
                    scale={item.scale}
                  />
                );
              })}
              <GearItemSmall
                image={gear_data.drone.image}
                imageAlt={gear_data.drone.imageAlt}
                title={gear_data.drone.title}
                shortDesc={gear_data.drone.shortDesc}
                scale={gear_data.drone.scale}
                href={gear_data.drone.href}
              />
              <div className="relative w-full col-span-2 px-4 md:px-0">
                <div className="h-[calc(100%-38px)] mb-2 overflow-hidden bg-white border rounded border-stone-light">
                  <NextImage
                    src={heart_lake}
                    className="rounded"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>
                <span className="inline-block w-full p-1 text-sm text-center border rounded text-stone-blue">
                  Photo taken on my{" "}
                  <Link
                    isExternal
                    href="https://amzn.to/3LILERf"
                    className="underline transition duration-200 cursor-pointer underline-offset-2 hover:bg-yolk/50 hover:text-dark"
                  >
                    DJI Mavic Mini
                  </Link>
                </span>
              </div>
            </div>
            <Break />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Heading className="col-span-full">Accessories</Heading>
              {gear_data.accessories.map((item) => {
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
                    scale={item.scale}
                  />
                );
              })}
            </div>
          </section>
          {/* <Break /> */}
          {/* <section className="grid w-full grid-cols-2 col-span-1 px-4 mt-16 md:grid-cols-4 h-96 gap-x-4">
            <div className="grid h-full bg-white border rounded md:col-span-3 border-stone-light place-content-center">
              <p>Visit my amazon store for more</p>
            </div>
            <div className="grid col-span-1 rounded bg-yolk place-content-center">
                <ArrowRight size={64} />
            </div>
          </section> */}
        </main>
        <Footer />
      </>
    );
}

export default Gear;