import Break from "@/components/sections/Break";
import { NextSeo } from "next-seo";
import NextImage from "next/future/image"
import { Heading } from "../components";
import sonyA7C from "../public/images/gear/sony-alpha-7c-full-frame-camera.png";

const gear_data = [
    {
        key: 1,
        heading: "Camera Body",
        title: "Sony Alpha 7C",
        longTitle: "Sony Alpha 7C Full-Frame Mirrorless Interchangeable-Lens Camera",
        subtitle: "The smallest full-frame camera out there, and it’s perfect.",
        description: "The Sony A7C has incredible autofocus so you never miss a shot, and as with any Sony camera, you can shoot the ISO through the roof without a sweat. It has a great rangefinder inspired design, and although the viewfinder is on the smaller side, I’ve never had an issue with it.",
        href: "https://amzn.to/3DtKWFa",
        image: sonyA7C,
        imageAlt: "",
        tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
    }
]

const GearItem = ({ heading, image, title, subtitle, href, description, imageAlt }) => {
    return (
      <div className="grid py-6 md:grid-cols-2 gap-x-12">
        <span className="text-xs uppercase col-span-full text-stone">
          {heading}
        </span>
        <div className="grid w-full h-full bg-white border rounded border-stone-light place-content-center">
          <div className="w-fit">
            <NextImage src={image} className="w-1/3 mx-auto drop-shadow-md" alt={imageAlt}/ >
          </div>
        </div>
        <div className="flex flex-col gap-y-9">
          <div className="max-w-screen-sm text-4xl">
            <h3 className="font-mtl-bold">{title}</h3>
            <p>{subtitle}</p>
          </div>
          <p className="max-w-screen-sm text-xl text-stone-blue">
            {description}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="p-4 text-center rounded bg-yolk"
          >
            Buy now
          </a>
        </div>
      </div>
    );
}

const GearItemSmall = ({ children }) => {
  return (
    <div>
      {/* <span className="text-xs uppercase text-stone">Camera Body</span> */}
      <div className="bg-white border rounded aspect-square border-stone-light"></div>
      <h3 className="font-mtl-bold">Sony Alpha 7C</h3>
      <p className="text-xl text-stone-blue">SOmething something</p>
      <a className="inline-block w-full p-4 text-center rounded bg-yolk">
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
          <section className="flex flex-col px-4">
            {gear_data.map((item) => {
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
            <div className="grid grid-cols-3 gap-x-6">
            <Heading className="col-span-full">Lenses</Heading>
              <GearItemSmall />
              <GearItemSmall />
              <GearItemSmall />
            </div>
          </section>
        </main>
      </>
    );
}

export default Gear;