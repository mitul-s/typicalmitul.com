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
import { useSwipeable } from "react-swipeable";

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

const Modal = ({ images, open, setOpen, curIndex, setCurIndex }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [direction, setDirection] = React.useState(0);
  function handleClose() {
    router.push("/metro", undefined, { shallow: true });
    // onClose();
  }

  let filteredImages = images?.filter((img) =>
    range(curIndex - 3, curIndex + 3).includes(img.id)
  );

  function changePhotoId(newVal) {
    if (newVal > curIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    const imageURL = images[newVal].filename;
    router.push(
      {
        query: { slug: imageURL },
      },
      `/metro/${imageURL}`,
      { shallow: true }
    );
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (curIndex < images?.length - 1) {
        changePhotoId(curIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (curIndex > 0) {
        changePhotoId(curIndex - 1);
      }
    },
    trackMouse: true,
  });

  console.log("filtered", filteredImages);
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen();
        handleClose();
      }}
      {...handlers}
    >
      {slug && (
        <DialogPortal>
          <DialogOverlay className="fixed top-0 left-0 w-screen h-screen bg-black/80 backdrop-blur-sm transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogContent
            className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              duration-200 
              data-[state=open]:animate-in data-[state=closed]:animate-out 
              data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
              data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
              data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] 
              data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] 
              grid w-full max-w-screen-xl bg-white border rounded h-fit transition-all"
          >
            <>
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2040/${images[curIndex].public_id}.${images[curIndex].format}`}
                alt=""
                className="block border border-black shadow-sm"
                width={images[curIndex].width}
                height={images[curIndex].height}
                draggable={false}
              />
              <div className="flex mx-auto">
                {curIndex > 0 && (
                  <button
                    className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    onClick={() => changePhotoId(images[curIndex].id - 1)}
                  >
                    <div>left</div>
                  </button>
                )}
                {curIndex + 1 < images.length && (
                  <button
                    className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    onClick={() => changePhotoId(images[curIndex].id + 1)}
                  >
                    <div>right</div>
                  </button>
                )}
                {filteredImages.map((image) => {
                  return (
                    <Image
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_180/${image.public_id}.${image.format}`}
                      alt="small photos on the bottom"
                      className="object-cover h-full transition transform"
                      width={180}
                      height={120}
                      key={image.id}
                    />
                  );
                })}
              </div>
              <DialogClose>Close</DialogClose>
            </>
          </DialogContent>
        </DialogPortal>
      )}
    </Dialog>
  );
};

const Page = ({ images }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [open, setOpen] = React.useState(false);
  const photoId = images.find((img) => img.filename === String(slug))?.id;
  // console.log(photoId);

  const [curIndex, setCurIndex] = React.useState(Number(photoId));
  console.log(images);

  // const filteredImages = images.filter((image) => {
  //   if (image.width > image.height) {
  //     return true;
  //   }
  //   return false;
  // });

  return (
    <main className="p-4 md:p-12">
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none -z-1 isolate"
        style={{
          opacity: 0.2,
          backgroundImage:
            "url(/images/noise.svg), linear-gradient(#1A4328 1.7000000000000002px, transparent 1.7000000000000002px), linear-gradient(to right, #1A4328 1.7000000000000002px, #F7F9F9 1.7000000000000002px)",
          backgroundSize: "auto, 24px 24px, 24px 24px",
        }}
      />
      <header className="flex flex-col mb-4 md:flex-row gap-x-4 gap-y-4">
        <div className="flex flex-col justify-between w-full bg-white border border-black md:w-2/3">
          <div className="px-6 pt-12 pb-6">
            <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
              Montreal in Motion
            </h1>
            <p
              className="max-w-screen-lg mt-1 text-xl md:text-2xl text-black/60"
              style={{
                textWrap: "balance",
              }}
            >
              A documentation of the Montreal metro system. All photos were
              captured between December 2021 and January 2022, while the city
              was under lockdown and curfew.
            </p>
            <div className="mt-6 space-x-4">
              <button className="min-w-[8rem] mt-6 text-sm metro-button text-white bg-metro active:shadow-none hover:bg-metro/90">
                Share
              </button>
              <Link href="/metro/about" passHref>
                <a className="font-semibold min-w-[8rem] mt-6 text-sm metro-button text-white bg-metro active:shadow-none">
                  Learn more
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full py-4 bg-metro" />
        </div>
        <div className="flex flex-col justify-between w-full bg-white border border-black md:w-1/3">
          <div className="flex flex-col p-6 pb-12 gap-y-4">
            <h2 className="text-lg font-medium tracking-tighter">
              About the photographer
            </h2>
            <p className="text-sm max-w-prose">
              Mitul Shah is a photographer based out of Toronto, Canada.
              Specializing in cityscapes and architecture, he is known for his
              unique style of capturing the world around him. His work has been
              featured in publications such as the Toronto Star, CBC, and
              BlogTO.
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
          <div className="w-full py-4 bg-metro" />
        </div>
      </header>

      <Modal
        images={images}
        open={open}
        setCurIndex={setCurIndex}
        curIndex={curIndex}
        setOpen={setOpen}
      />

      <div className="grid border border-black md:grid-cols-3">
        {images.map(
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
