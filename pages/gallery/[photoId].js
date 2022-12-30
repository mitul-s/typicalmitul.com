import { useRouter } from "next/router";
import getResults from "@/utils/cachedImages";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import cloudinary from "@/utils/cloudinary";
import NextFutureImage from "next/future/image";
import Link from "next/link";

const Gallery = ({ selectedPhoto }) => {
  // const router = useRouter();
  // const { photoId } = router.query;
  // let index = Number(photoId);

  const currentPhotoURL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${selectedPhoto.public_id}.${selectedPhoto.format}`;

  return (
    <main className="relative">
      <div className="px-4 py-4">
        <div className="relative">
          <Link href="/gallery">
            <a className="rounded px-2 py-2 inline-block absolute top-4 left-4 bg-yolk text-black text-sm border-black border leading-none transition betterhover:hover:bg-yolk/75">
              Back to Gallery
            </a>
          </Link>
          <NextFutureImage
            src={currentPhotoURL}
            width={selectedPhoto.width}
            height={selectedPhoto.height}
            blurDataURL={selectedPhoto.blurDataUrl}
            placeholder="blur"
            className="rounded shadow"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export const getStaticProps = async (context) => {
  const results = await getResults();

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

  const selectedPhoto = reducedResults.find(
    (img) => img.id === Number(context.params.photoId)
  );
  selectedPhoto.blurDataUrl = await getBase64ImageUrl(selectedPhoto);

  return {
    props: {
      selectedPhoto: selectedPhoto,
    },
  };
};

export async function getStaticPaths() {
  const results = await cloudinary.v2.search
    .expression(`folder:typicalmitul/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  let fullPaths = [];
  for (let i = 0; i < results.resources.length; i++) {
    fullPaths.push({ params: { photoId: i.toString() } });
  }

  return {
    paths: fullPaths,
    fallback: false,
  };
}

export default Gallery;
