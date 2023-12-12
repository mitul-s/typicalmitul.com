import { CubeContainer, Face } from "@/components/metro/components";

const Page = () => {
  const Content = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full max-w-screen-xl py-12 mx-auto text-metro">
        <div className="w-full px-12 py-12 bg-white border-2 border-metro">
          <h1 className="font-bold tracking-tight text-9xl">
            About the
            <br /> project
          </h1>
          <p className="text-2xl max-w-prose">Montreal forever will</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Face id="main">
        <Content />
      </Face>
      <Face id="top">
        <Content />
      </Face>
      <Face id="bottom">
        <Content />
      </Face>
      <Face id="left" />
      <Face id="right" />
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <CubeContainer>{page}</CubeContainer>;
};

export default Page;
