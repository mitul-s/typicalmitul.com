import { NextSeo } from "next-seo";

const gear_data = [
    {
        key: 1,
        heading: "Camera Body",
        title: "Sony Alpha 7C",
        longTitle: "Sony Alpha 7C Full-Frame Mirrorless Interchangeable-Lens Camera",
    }
]

const Gear = () => {
    return (
      <>
        <NextSeo title="Gear" canonical="https://typicalmitul.com/gear" />
        <main className="relative h-screen pb-20">
          <div className="flex items-center px-6 md:px-4 gap-x-yeat">
            <span className="w-6 h-6 border rounded-full bg-yolk border-dark shrink-0"></span>
            <h1 className="text-5xl uppercase">Gear</h1>
          </div>
          <section className="px-4">
            <div className="grid grid-cols-2 gap-x-4">
              <div className="w-full h-full bg-white rounded">c</div>
              <div className="flex flex-col gap-y-9">
                <div className="max-w-screen-sm text-4xl">
                  <h2 className="font-mtl-bold">Sony Alpha 7C</h2>
                  <p>
                    The smallest full-frame camera out there, and it’s perfect.
                  </p>
                </div>
                <p className="max-w-screen-sm text-xl text-stone-blue">
                  The Sony A7C has incredible autofocus so you never miss a
                  shot, and as with any Sony camera, you can shoot the ISO
                  through the roof without a sweat. It has a great rangefinder
                  inspired design, and although the viewfinder is on the smaller
                  side, I’ve never had an issue with it.
                </p>
                <button className="p-4 bg-yolk">Buy now</button>
              </div>
            </div>
          </section>
        </main>
      </>
    );
}

export default Gear;