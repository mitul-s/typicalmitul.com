import { useState } from "react";
import { useRouter } from "next/router";
import NextFutureImage from "next/future/image";
import Link from "next/link";
import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import Masonry from "react-masonry-css";
import { X } from "phosphor-react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogPortal,
} from "@radix-ui/react-dialog";

const Gallery = ({ images }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    public_id: "",
    format: "",
  });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <main className="relative">
      <Dialog open={open} onOpenChange={setOpen}>
        {photoId && (
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black/75 backdrop-blur-md rdx-state-open:overlay-fade-in rdx-state-closed:overlay-fade-out" />
            <DialogContent
              className="fixed inset-0 mx-auto my-auto rounded shadow outline-none h-fit w-fit rdx-state-open:dialog-item-open rdx-state-closed:dialog-item-close"
              onEscapeKeyDown={() => router.push("/gallery")}
              onPointerDownOutside={() => router.push("/gallery")}
            >
              <div className="w-auto sm:h-[800px]">
                <NextFutureImage
                  alt=""
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1440/${selectedImage.public_id}.${selectedImage.format}`}
                  placeholder="blur"
                  blurDataURL={selectedImage.blurDataURL}
                  fill
                  className="w-auto h-full rounded shadow-md !relative"
                />
              </div>
              <div className="flex gap-x-2 absolute top-4 right-4">
                {/* <button>Share</button> */}
                <DialogClose className="rounded-full bg-white/10 text-white p-2.5 leading-none hover:bg-black transition">
                  <X />
                </DialogClose>
              </div>
            </DialogContent>
          </DialogPortal>
        )}
      </Dialog>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map(({ id, public_id, format, width, height, blurDataUrl }) => (
          <Link
            key={id}
            href={`/gallery/?photoId=${id}`}
            as={`/gallery/${id}`}
            shallow
          >
            <NextFutureImage
              onClick={() => {
                setSelectedImage({
                  public_id: public_id,
                  format: format,
                  alt: "",
                  blurDataURL: blurDataUrl,
                });
                setOpen(true);
              }}
              className="block overflow-hidden transition-all duration-500 border rounded-lg shadow betterhover:hover:shadow-xl betterhover:hover:shadow-yolk/50 betterhover:hover:border-yolk border-stone"
              alt=""
              placeholder="blur"
              blurDataURL={blurDataUrl}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
              width={width}
              height={height}
            />
          </Link>
        ))}
      </Masonry>
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
