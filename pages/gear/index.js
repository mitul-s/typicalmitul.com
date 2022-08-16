import NextImage from "next/image"
import Sheet from "@/components/Sheet";

// before:absolute before:content-[''] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-32 before:h-12 before:bg-yolk before:blur-2xl

const Item = () => {
    return (
      <div className="p-2 text-left text-white rounded aspect-square bg-dark">
        <div className="h-full p-24 transition duration-500 border rounded-lg shadow-xl border-stone-light betterhover:hover:border-yolk bg-eggshell betterhover:hover:bg-dark/25 group">
          <div className="relative h-full overflow-hidden transition-all duration-300 aspect-auto group-betterhover:hover:-translate-y-3">
            <NextImage
              src="https://www.dpreview.com/files/p/E~products/sony_a7c/shots/09450c195d7145258b1e20315d03069e.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="py-3 mt-2">Sony A7C</div>
      </div>
    );
}

export default function Gear() {
    return (
      <main className="relative px-4 py-12 mt-24">
        <div className="flex items-start mb-12 leading-none gap-x-yeat">
          <div className="flex items-center gap-x-yeat">
            <span className="w-6 h-6 border rounded-full bg-yolk border-dark"></span>
            <h2 className="text-6xl uppercase">Gear</h2>
          </div>
          <p className="max-w-xs mt-2">
            A collection of things I use frequently throughout my day and stuff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          <div className="flex items-end h-full p-4 border rounded-lg bg-eggshell">
            <div className="text-base text-stone">
              Disclaimer: I might earn money off these links and stuff. This
              should be 2 lines long.
            </div>
          </div>
          <Sheet>
            <Item />
          </Sheet>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </main>
    );
}