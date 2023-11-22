// import { Playfair_Display } from "next/font/google";
import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "phosphor-react";

const Page = ({ images }) => {
  //   const images = [];
  //   const PlayfairDisplay = Playfair_Display();
  const filteredImages = images.filter((image) => {
    if (image.width > image.height) {
      return true;
    }
    return false;
  });

  return (
    <div className="px-12 py-12 bg-[#F7F9F9]">
      <h1 className="font-bold text-8xl">Montreal in Motion</h1>
      <p className="text-4xl max-w-prose text-black/60">
        Qui ea pariatur veniam amet. Pariatur occaecat non sunt anim consectetur
        deserunt. Adipisicing aute minim do sunt commodo aliqua. Excepteur nulla
        sint laboris mollit magna.
      </p>
      <button className="mt-6 text-sm metro-button text-white bg-[#1A4328] active:shadow-none">
        Learn more
      </button>
      <div className="grid grid-cols-2 gap-2 py-12">
        {filteredImages.map(
          ({ id, public_id, format, width, height, filename, blurDataUrl }) => {
            return (
              <Link href={`/metro/${filename}`} passHref key={id}>
                <a className="relative flex flex-col w-full h-full overflow-hidden border border-black cursor-pointer group">
                  <Image
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1020/${public_id}.${format}`}
                    alt=""
                    blurDataURL={blurDataUrl}
                    placeholder="blur"
                    className="block border border-black shadow-sm"
                    width={width}
                    height={height}
                  />
                  <div className="absolute top-0 left-0 w-full h-full text-white transition opacity-0 group-hover:opacity-100 duration-250">
                    <div className="px-2 py-2 bg-black border w-fit">yooo</div>
                  </div>
                </a>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};

export default Page;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:metro/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  let reducedResults = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      filename: result.filename,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
