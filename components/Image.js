import NextImage from "next/image";
import clsx from "clsx";

export const Image = ({
  src,
  alt,
  hasOverlay,
  border,
  height,
  width,
  pointer,
  className,
  vertical,
  aspectRatio,
  hasScale,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden rounded-lg transition-all border shadow hover:shadow-xl hover:shadow-yolk/50 duration-500 hover:border-yolk",
        {
          content: hasOverlay,
          "border-yolk": border === "yolk",
          "border-stone": border === "stone" || !border,
          "cursor-pointer": pointer,
          "aspect-2/3": vertical && !aspectRatio && (!width || !height),
          "aspect-3/2": !vertical && !aspectRatio && (!width || !height),
          [height]: height,
          [width]: width,
          [className]: className,
        }
      )}
    >
      <NextImage
        {...props}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={clsx({
          "transition duration-500 hover:scale-[1.03]": !hasScale,
        })}
      />
    </div>
  );
};

// const Image = ({ src, alt, vertical, overlay, ...props }) => {

//   return (
//     <div
//       className={`relative w-full overflow-hidden rounded border border-yolk shadow transition-all group-hover:shadow-yolk group-hover:blur group-hover:brightness-50 duration-500
//                   ${vertical ? "aspect-2/3" : "aspect-3/2"}
//                   ${overlay ? "content" : ""}`}
//     >
//       <NextImage
//         {...props}
//         src={src}
//         alt={alt}
//         layout="fill"
//         objectFit="cover"
//       />
//     </div>
//   );
// };

export default Image;
