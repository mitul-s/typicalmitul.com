import Link from "next/link";
import { ArrowLeft } from "phosphor-react";

const Page = () => {
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
      <div className="mx-auto max-w-prose">
        <Link href="/metro" passHref>
          <a className="flex items-center w-full p-2 mb-2 text-white border border-black gap-x-1 bg-metro">
            <ArrowLeft weight="bold" />
            Return to Gallery
          </a>
        </Link>
        <div className="p-4 mx-auto bg-white border border-black max-w-prose">
          <h1 className="text-4xl font-bold">About the project</h1>
          <p>
            Non tempor magna aute nostrud enim occaecat elit et. Nisi qui
            reprehenderit aute commodo commodo cupidatat sunt commodo laborum
            magna eiusmod. Nulla est incididunt do aliquip elit aute cillum.
            Velit dolor incididunt tempor nostrud ut exercitation sit aute culpa
            nisi nisi. Consequat esse esse deserunt ullamco. Id magna et
            consequat deserunt elit est laboris reprehenderit. Sit laborum id
            duis aliquip culpa velit dolor quis laboris ex est. Ea ex do dolor
            officia irure deserunt Lorem ut enim ut commodo consectetur.
          </p>
        </div>
      </div>
    </main>
  );
};

Page.getLayout = function getLayout(page) {
  return page;
};

export default Page;
