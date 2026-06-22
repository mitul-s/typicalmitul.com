import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextFutureImage from "next/image";
import Link from "next/link";
import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import { X } from "@phosphor-icons/react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogPortal,
} from "@radix-ui/react-dialog";
import { cx } from "class-variance-authority";
import splitbee from "@splitbee/web";

const Gallery = ({ images }) => {
  const router = useRouter();
  const { photoId, type } = router.query;
  const [open, setOpen] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [filter, setFilter] = useState("typicalmitul");
  const newImages = images.filter((image) => image.public_id.includes(filter));
  const [gridImages, setGridImages] = useState(images);
  const [selectedImage, setSelectedImage] = useState({
    public_id: "",
    format: "",
    blurDataURL: "",
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!router.isReady) return;
    if (type && type !== "all") {
      setFilter(type);
    } else {
      setFilter("typicalmitul");
    }
  }, [router.isReady]);

  useEffect(() => {
    const shuffledImages = newImages.sort(() => 0.5 - Math.random());
    setGridImages(shuffledImages);
  }, [filter]);

  useEffect(() => {
    if (shuffled) return;
    const shuffledImages = newImages.sort(() => 0.5 - Math.random());
    setShuffled(true);
    setGridImages(shuffledImages);
  }, []);

  return (
    <main className="relative">
      <Dialog open={open} onOpenChange={setOpen}>
        {photoId && (
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black/75 backdrop-blur-md rdx-state-open:overlay-fade-in rdx-state-closed:overlay-fade-out" />
            <DialogContent
              className="fixed inset-0 mx-auto my-auto outline-none h-fit w-fit rdx-state-open:dialog-item-open rdx-state-closed:dialog-item-close"
              onEscapeKeyDown={() => router.back()}
              onPointerDownOutside={() => router.back()}
            >
              <div
                className={cx(
                  "relative w-auto sm:h-[800px]",
                  selectedImage.width < selectedImage.height
                    ? "h-[500px]"
                    : "h-[250px]"
                )}
              >
                <NextFutureImage
                  alt=""
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1440/${selectedImage.public_id}.${selectedImage.format}`}
                  placeholder="blur"
                  blurDataURL={selectedImage.blurDataURL}
                  fill
                  className="!relative"
                />
              </div>
              <div className="flex gap-x-2 absolute top-4 right-4">
                <DialogClose
                  className="rounded-full bg-white/10 text-white p-2.5 leading-none hover:bg-black transition shrink-0"
                  onClick={() => router.back()}
                >
                  <X />
                </DialogClose>
              </div>
            </DialogContent>
          </DialogPortal>
        )}
      </Dialog>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: "8px",
          padding: "8px",
        }}
      >
        {gridImages.map(({ id, public_id, format, width, height, blurDataUrl }) => (
          <Link
            key={id}
            href={`/gallery/?photoId=${id}`}
            as={`/gallery/${id}`}
            shallow
            legacyBehavior
          >
            <a
              style={{
                display: "block",
              }}
              onClick={() => {
                setSelectedImage({
                  public_id,
                  format,
                  blurDataURL: blurDataUrl,
                  width,
                  height,
                });
                setOpen(true);
                splitbee.track("Open Photo", { title: public_id });
              }}
            >
              <NextFutureImage
                alt=""
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={width}
                height={height}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  cursor: "pointer",
                }}
              />
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:typicalmitul/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  let reducedResults = [];
  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
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

export default Gallery;
