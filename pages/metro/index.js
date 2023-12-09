import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useRouter } from "next/router";
import { InstagramLogo, TwitterLogo } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";

export const range = (start, end) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += 1) {
    output.push(i);
  }
  return output;
};

const Page = ({ images }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [open, setOpen] = React.useState(false);
  const photoId = images.find((img) => img.filename === String(slug))?.id;
  // console.log(photoId);
  let index = Number(photoId);
  console.log(index, photoId);
  const [curIndex, setCurIndex] = React.useState(Number(photoId));
  console.log(images);

  // let filteredImages = images?.filter((img) =>
  //   range(index - 3, index + 3).includes(img.id)
  // );
  // console.log("filtered", filteredImages);

  function handleClose() {
    // router.push("/metro", undefined, { shallow: true });
    // onClose();
  }

  const filteredImages = images.filter((image) => {
    if (image.width > image.height) {
      return true;
    }
    return false;
  });

  return (
    <main className="p-12">
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none -z-1 isolate"
        style={{
          opacity: 0.2,
          backgroundImage:
            "url(/images/noise.svg), linear-gradient(#1A4328 1.7000000000000002px, transparent 1.7000000000000002px), linear-gradient(to right, #1A4328 1.7000000000000002px, #F7F9F9 1.7000000000000002px)",
          backgroundSize: "auto, 24px 24px, 24px 24px",
        }}
      />
      <header className="flex flex-row mb-4 gap-x-4">
        <div className="flex flex-col justify-between w-2/3 bg-white border border-black">
          <div className="px-6 py-12">
            <h1 className="font-bold text-8xl">Montreal in Motion</h1>
            <p
              className="max-w-screen-xl mt-4 text-2xl text-black/60"
              style={{
                textWrap: "balance",
              }}
            >
              A documentation of the Montreal metro system. All photos were
              captured between December 2021 and January 2022, while the city
              was under lockdown and curfew.
            </p>
            <div className="space-x-4">
              <button className="min-w-[8rem] mt-6 text-sm metro-button text-white bg-[#00704F] active:shadow-none hover:bg-[#00704F]/90">
                Share
              </button>
              <button className="font-semibold min-w-[8rem] mt-6 text-sm metro-button text-white bg-[#00704F] active:shadow-none">
                Learn more
              </button>
            </div>
          </div>
          <div className="py-4 bg-[#00704F] w-full" />
        </div>
        <div className="flex flex-col justify-between w-1/3 bg-white border border-black">
          <div className="flex flex-col px-6 py-12 gap-y-4">
            <h2 className="font-medium text-md">About the photographer</h2>
            <p className="text-sm max-w-prose">
              Mitul Shah is a photographer based out of Toronto, Canada.
            </p>
            <h2 className="font-medium text-md">About the photographer</h2>
            <p className="text-sm max-w-prose">
              Nostrud ad nisi sunt fugiat sunt sunt duis qui. Adipisicing dolore
              do occaecat pariatur veniam ut ex ea deserunt nisi nisi laborum
              pariatur eiusmod. Officia ut duis ad do ad laboris consectetur
              proident magna consequat. Enim sint et ad consectetur excepteur
              est occaecat enim consequat.
            </p>
            <div className="flex items-center justify-between w-full gap-x-6">
              <span className="w-full h-px mt-1 bg-black/50"></span>
              <div className="flex gap-x-2">
                <TwitterLogo />
                <InstagramLogo />
              </div>
            </div>
          </div>
          <div className="py-4 bg-[#1a4328] border-black border-x w-full" />
        </div>
      </header>

      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen();
          handleClose();
        }}
      >
        {slug && (
          <DialogPortal>
            <DialogOverlay className="fixed top-0 left-0 w-screen h-screen bg-black/80 backdrop-blur-sm transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <DialogContent
              className="fixed overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-white border rounded top-1/2 w-fit h-fit left-1/2 backdrop-blur-sm transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
              asChild
            >
              <motion.div>
                <>
                  <Image
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1020/${images[curIndex].public_id}.${images[curIndex].format}`}
                    alt=""
                    className="block border border-black shadow-sm"
                    width={images[curIndex].width}
                    height={images[curIndex].height}
                    draggable={false}
                  />
                  <DialogClose>Close</DialogClose>
                </>
              </motion.div>
            </DialogContent>
          </DialogPortal>
        )}
      </Dialog>

      <div className="grid grid-cols-3 border border-black">
        {filteredImages.map(
          ({ id, public_id, format, width, height, filename, blurDataUrl }) => {
            return (
              <div className="flex flex-col p-4 bg-white" key={id}>
                <Link
                  href={`/metro/?slug=${filename}`}
                  as={`/metro/${filename}`}
                  shallow
                  passHref
                >
                  <a
                    className="relative flex flex-col w-full h-full overflow-hidden border border-black cursor-pointer group"
                    style={{
                      boxShadow: "3px 3px #aaa",
                    }}
                    onClick={() => {
                      setOpen(true);
                      setCurIndex(id);
                    }}
                  >
                    <Image
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1020/${public_id}.${format}`}
                      alt=""
                      blurDataURL={blurDataUrl}
                      placeholder="blur"
                      className=""
                      width={width}
                      height={height}
                      draggable={false}
                    />
                    {/* <div className="absolute top-0 left-0 w-full h-full text-white transition opacity-0 group-hover:opacity-100 duration-250">
                    <div className="px-2 py-2 bg-black border w-fit">yooo</div>
                  </div> */}
                  </a>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </main>
  );
};

Page.getLayout = function getLayout(page) {
  return page;
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
