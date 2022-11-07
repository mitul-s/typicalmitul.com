import { indexQuery, settingsQuery } from "../../lib/queries";
import { usePreviewSubscription } from "../../lib/sanity";
import { getClient, overlayDrafts } from "../../lib/sanity.server";

export default function Blog({ allPosts: initialAllPosts, preview }) {
    const { data: allPosts } = usePreviewSubscription(indexQuery, {
      initialData: initialAllPosts,
      enabled: preview,
    })

  return <div>
    {allPosts.map((post) => {
      console.log(post)
      return (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.author.name}</p>
          <p>{post.slug}</p>
        </div>
      );
    }
      
    )}
  </div>;
}

export async function getStaticProps({ preview = false }) {
  /* check if the project id has been defined by fetching the vercel envs */
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
    const blogSettings = await getClient(preview).fetch(settingsQuery);

    return {
      props: { allPosts, preview, blogSettings },
      // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
    };
  }

  /* when the client isn't set up */
  return {
    props: {},
    revalidate: undefined,
  };
}
