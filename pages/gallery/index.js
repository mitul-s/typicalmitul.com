import { useRouter } from "next/router";
import cloudinary from "utils/cloudinary";
import Link from "@/components/Link";
import Image from "next/future/image"
import getBase64ImageUrl from "utils/generateBlurPlaceholder";

const Gallery = ({ images }) => {
  const router = useRouter();
  const { photoId } = router.query;

  return (
    <main>
      <div className="grid grid-cols-3">
        {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
                key={id}
                href="/gallery/[id]"
                as={`/gallery/${id}`}
                shallow
            >
            <Image
                alt=""
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
            />
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
