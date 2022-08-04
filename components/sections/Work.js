import { Text, Image } from "@components";
import { GlowButton } from "../Button";

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

const ShopifyLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={215} height={61} fill="none">
      <path
        d="M46.376 11.553a.582.582 0 0 0-.526-.489c-.218-.018-4.49-.083-4.49-.083s-3.572-3.47-3.925-3.822c-.353-.353-1.042-.247-1.31-.167-.003.002-.67.208-1.794.556a12.581 12.581 0 0 0-.86-2.11c-1.27-2.427-3.134-3.71-5.384-3.714h-.009c-.156 0-.31.015-.467.028a6.88 6.88 0 0 0-.203-.234c-.98-1.05-2.238-1.56-3.744-1.515-2.906.083-5.801 2.182-8.148 5.91-1.652 2.624-2.908 5.92-3.264 8.472-3.338 1.034-5.672 1.756-5.723 1.773-1.685.529-1.738.58-1.958 2.169C4.408 19.527 0 53.61 0 53.61L36.94 60l16.01-3.98s-6.533-44.164-6.574-44.467ZM32.48 8.121l-2.866.887c-.022-1.471-.196-3.519-.882-5.288 2.205.418 3.29 2.913 3.748 4.401Zm-4.799 1.486-6.167 1.91c.596-2.282 1.726-4.555 3.114-6.044.516-.555 1.239-1.172 2.095-1.525.803 1.678.978 4.053.958 5.66Zm-3.96-7.67c.683-.015 1.257.135 1.748.458-.786.408-1.545.994-2.257 1.758-1.846 1.98-3.261 5.055-3.825 8.021-1.76.545-3.481 1.079-5.066 1.568 1-4.669 4.914-11.675 9.4-11.805Z"
        fill="#95BF47"
      />
      <path
        d="M45.851 11.066c-.218-.019-4.489-.084-4.489-.084s-3.572-3.469-3.925-3.821a.873.873 0 0 0-.496-.228l.002 53.065L52.95 56.02s-6.532-44.162-6.574-44.465a.583.583 0 0 0-.526-.49Z"
        fill="#5E8E3E"
      />
      <path
        d="m28.067 19.297-1.86 6.956s-2.074-.943-4.532-.788c-3.606.228-3.644 2.501-3.607 3.072.196 3.111 8.38 3.79 8.84 11.078.361 5.733-3.041 9.655-7.943 9.965-5.885.37-9.124-3.1-9.124-3.1l1.247-5.303s3.26 2.46 5.87 2.295c1.706-.108 2.315-1.495 2.253-2.475-.256-4.058-6.921-3.819-7.342-10.487-.355-5.611 3.33-11.298 11.462-11.81 3.133-.202 4.736.597 4.736.597Z"
        fill="#fff"
      />
      <path
        d="M74.032 33.864c-1.84-1-2.787-1.841-2.787-2.999 0-1.472 1.314-2.418 3.367-2.418 2.389 0 4.522.998 4.522.998l1.682-5.154s-1.547-1.21-6.1-1.21c-6.337 0-10.729 3.629-10.729 8.73 0 2.893 2.05 5.102 4.787 6.679 2.209 1.261 2.998 2.156 2.998 3.47 0 1.367-1.105 2.472-3.155 2.472-3.056 0-5.942-1.579-5.942-1.579l-1.788 5.155s2.666 1.788 7.152 1.788c6.522 0 11.202-3.208 11.202-8.993-.001-3.1-2.367-5.31-5.209-6.94ZM100.013 23.03c-3.208 0-5.733 1.525-7.678 3.838l-.105-.053 2.787-14.567h-7.258l-7.047 37.076h7.258L90.39 36.65c.946-4.787 3.418-7.73 5.732-7.73 1.63 0 2.262 1.104 2.262 2.682 0 1-.105 2.21-.315 3.208l-2.734 14.515h7.258l2.839-14.989c.316-1.578.527-3.47.527-4.733-.003-4.103-2.159-6.574-5.945-6.574ZM122.363 23.03c-8.731 0-14.514 7.888-14.514 16.67 0 5.627 3.47 10.149 9.992 10.149 8.572 0 14.357-7.677 14.357-16.67 0-5.206-3.051-10.15-9.835-10.15Zm-3.576 21.247c-2.472 0-3.524-2.104-3.524-4.734 0-4.154 2.157-10.938 6.101-10.938 2.577 0 3.417 2.21 3.417 4.366 0 4.469-2.154 11.306-5.994 11.306ZM150.762 23.03c-4.899 0-7.679 4.312-7.679 4.312h-.104l.421-3.891h-6.416c-.315 2.63-.895 6.625-1.472 9.623l-5.049 26.557h7.258l1.997-10.728h.159s1.489.946 4.26.946c8.519 0 14.093-8.729 14.093-17.565 0-4.889-2.157-9.254-7.468-9.254Zm-6.942 21.35c-1.884 0-2.999-1.051-2.999-1.051l1.21-6.784c.842-4.522 3.208-7.52 5.733-7.52 2.209 0 2.892 2.05 2.892 3.997 0 4.68-2.787 11.359-6.836 11.359ZM168.59 12.617c-2.313 0-4.154 1.84-4.154 4.206 0 2.157 1.367 3.63 3.418 3.63h.105c2.262 0 4.207-1.526 4.26-4.207 0-2.104-1.42-3.63-3.629-3.63ZM158.441 49.324h7.256l4.945-25.715h-7.311l-4.89 25.715ZM189.101 23.556h-5.049l.262-1.21c.421-2.471 1.894-4.68 4.313-4.68a7.56 7.56 0 0 1 2.313.368l1.42-5.68s-1.262-.63-3.945-.63c-2.577 0-5.152.736-7.099 2.418-2.472 2.104-3.629 5.153-4.207 8.204l-.209 1.21h-3.367l-1.052 5.47h3.367l-3.839 20.3h7.258l3.839-20.3h4.996l.999-5.47ZM206.56 23.61s-4.537 11.43-6.574 17.669h-.106c-.138-2.01-1.788-17.67-1.788-17.67h-7.626l4.367 23.611c.106.526.053.843-.158 1.21-.843 1.63-2.262 3.209-3.945 4.366-1.367.999-2.892 1.63-4.101 2.05L188.627 61c1.473-.315 4.522-1.526 7.099-3.944 3.314-3.103 6.363-7.889 9.518-14.41l8.888-19.038h-7.572v.001Z"
        fill="#fff"
      />
    </svg>
  );
};

const ColumnOne = () => (
  <div className="w-full h-screen pt-6 pb-6 grow-1">
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center leading-none uppercase gap-x-2">
        <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
        <h2 className="text-dark">Work</h2>
      </div>
      <div>
        <Text>
          Throughout the years, I have had the pleasure of working with
          countless So I started from scratch. I made another, then another. And
          by the end of the semester, by like box number five, I had built this
          thing. You should have seen it. It was insane. I mean, I built it out
          of Peruvian walnut with inlaid zebrawood.
        </Text>
        <p className="w-full mt-6 sm:w-2/3 text-md text-dark/50">
          Photography is my craft. From brand shoots to non-exclusive licensing,
          I&apos;m able to provide creative pieces that work for you.
        </p>
        <div className="flex mt-4 gap-x-1">
          <div className="flex items-center justify-center px-4 py-2 rounded-full text-dark/75 bg-dark/10">
            Photography
          </div>
          <div className="flex items-center justify-center px-4 py-2 rounded-full text-dark/75 bg-dark/10">
            Licensing
          </div>
          <div className="flex items-center justify-center px-4 py-2 rounded-full text-dark/75 bg-dark/10">
            Branding
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ImageLayout = ({ src }) => {
  return (
    <div
      className="grid border rounded overflow-clip grow bg-dark/50 border-stone"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex items-center justify-center w-full h-full text-white bg-dark/50">
        yo
        <div className="absolute bottom-4 right-4 text-dark">
          <GlowButton></GlowButton>
        </div>
      </div>
    </div>
  );
};

// const ImageLayout = () => {
//   return (
//     <div className="w-full h-full px-4 pt-4 first:-mr-2 first:pl-4 last:pr-4 shrink-0">
//       <div className="w-full h-full border rounded shrink-0 bg-dark border-yolk">
//         Hello
//       </div>
//     </div>
//   );
// }

// const ImageLayout = ({ src, caption, link }) => (
//   <div className="grid w-full overflow-hidden transition-all duration-500 rounded-lg shadow group">
//     <Image
//       src={src}
//       alt=""
//       hasOverlay
//       className="group-hover:brightness-50 group-hover:scale-[1.05]"
//     />
//     <div className="relative w-full h-full transition duration-500 border rounded-lg overlay border-stone group-hover:backdrop-blur-md">
//       <div className="flex items-center justify-center h-full transition duration-700 group-hover:-translate-y-12 group-hover:opacity-0">
//         <ShopifyLogo />
//       </div>
//       <div className="absolute right-4 bottom-6">
//         <GlowButton />
//       </div>
//       <div className="absolute w-full max-w-sm text-center text-white transition-all duration-700 -translate-x-1/2 opacity-0 md:text-xl md:max-w-lg group-hover:-translate-y-1/2 top-1/2 left-1/2 group-hover:opacity-100">
//         I figured I could cut classes for the rest of the semester and he
//         couldn&apos;t flunk me as long as I, you know, made the thing. So I
//         finished it in a couple days.
//       </div>
//     </div>
//   </div>
// );

const Work = () => {
  return (
    <div className="relative grid h-full grid-cols-1 gap-4 sm:grid-cols-2 isolate">
      <ColumnOne />
      <div className="flex flex-col h-screen gap-y-yeat">
        <ImageLayout src={ph3} />
        <ImageLayout src={ph} />
        <ImageLayout src={us2} />
      </div>
    </div>
  );
};
export default Work;
