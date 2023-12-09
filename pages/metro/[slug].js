import { useRouter } from "next/router";
import cloudinary from "@/utils/cloudinary";
import { getMetroResults } from "@/utils/cachedImages";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import Image from "next/image";

const Page = ({ currentPhoto }) => {
  console.log(currentPhoto);
  const router = useRouter();
  const { slug } = router.query;
  let index = Number(slug);

  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format}`;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={currentPhotoUrl}
        layout="fill"
        objectFit="contain"
        placeholder="blur"
        blurDataURL={currentPhoto.blurDataUrl}
        alt=""
      />
    </div>
  );
};

Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};

export default Page;

export const getStaticProps = async (context) => {
  const results = await getMetroResults();
  console.log(results);
  console.log(context.params.slug);

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

  const currentPhoto = reducedResults.find(
    (img) => img.filename === String(context.params.slug)
  );
  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

  return {
    props: {
      currentPhoto: currentPhoto,
    },
  };
};

export async function getStaticPaths() {
  const results = await cloudinary.v2.search
    .expression(`folder:metro/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  let fullPaths = [];
  for (let result of results.resources) {
    fullPaths.push({ params: { slug: result.filename } });
  }

  return {
    paths: fullPaths,
    fallback: false,
  };
}
