import { Text } from "@components";
import NextImage from "next/image";

let us =
  "https://images.unsplash.com/photo-1645389776527-43c47e909550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
let us2 = "https://images.unsplash.com/photo-1647089490719-d539f4041119";
let us3 = "https://images.unsplash.com/photo-1643068485255-15bb6c3727da";
let ph =
  "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147195/Typical%20Mitul/Test/RainyJays_ovyisq.jpg";
let ph2 =
  "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147216/Typical%20Mitul/Test/Karen_ifcimd.jpg";
let ph3 =
  "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147132/Typical%20Mitul/Test/IMG_7893_cntower_print_men3lj.jpg";


const ColumnOne = () => {

  const Tag = ({ children }) => (
    <div className="flex items-center justify-center px-2.5 py-1 text-sm rounded-full sm:px-4 sm:py-2 text-dark/75 bg-dark/10 sm:text-base">
      {children}
    </div>
  );

  
  return (
    <div className="w-full pt-6 pb-6 md:pr-8 max-w-prose grow">
      <div className="flex flex-col justify-between h-full">
        <div>
          <Text>
            At the centre of everything I do rests the power of storytelling.
            Through the years, I have been lucky to work alongside countless
            brands and companies to craft an impactful story through my photos.
          </Text>
          <p className="w-full mt-2 sm:w-2/3 text-md text-dark/50">
            Photography revolves around my trips and adventures. From brand
            shoots to licensing, I would be honoured to provide creative pieces
            that work for you.
          </p>
          <div className="flex mt-4 gap-x-1">
            <Tag>Photography</Tag>
            <Tag>Licensing</Tag>
            <Tag>Branding</Tag>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageLayout = ({ logo, src, logoAlt, alt, className }) => {
  return (
    <div className="grid overflow-hidden border rounded h-fit border-stone first:ml-6 last:mr-6 sm:first:ml-0 sm:last:mr-0 isolate">
      <div className="z-10 flex flex-col items-center justify-center text-white gap-y-4 -mt-yeat overlay">
        <div className={`relative w-28 h-28 sm:w-40 sm:h-40 overflow-hidden ${className}`}>
          <NextImage layout="fill" objectFit="contain" src={logo} alt={logoAlt} />
        </div>
      </div>
      <div className="scale-[101.5%] content brightness-75 aspect-square blur-[2px]">
        <NextImage 
          // placeholder="blur" 
          layout="fill" 
          src={src}
          alt={alt}
          className="object-cover" />
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="relative grid h-full grid-cols-1 gap-4 sm:grid-cols-1 isolate">
      <div className="flex items-center leading-none uppercase gap-x-2">
        <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
        <h2 className="text-dark">Work</h2>
      </div>
      <div className="grid grid-flow-col -mx-6 overflow-x-auto gap-x-yeat auto-cols-custom md:auto-cols-auto sm:mx-0">
        <ImageLayout src={ph3} alt="" logoAlt="Shopify logo"  logo="/images/logos/shopify.png" />
        <ImageLayout src={ph}  alt="" logoAlt="Uber logo" logo="/images/logos/uber.png" />
        <ImageLayout src={us2} alt="" logoAlt="Delta Hotels logo"  logo="/images/logos/delta.png" className="brightness-0 invert" />
      </div>
      <ColumnOne />
    </div>
  );
};
export default Work;
