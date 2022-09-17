import React from "react";

const GuidingLines = () => (
  <div className="absolute w-full h-full px-4 pointer-events-none">
    <div className="relative grid h-full max-w-full grid-cols-2 grid-rows-1 mx-auto my-0">
      <div className="w-px bg-stone-light md:first-of-type:bg-transparent"></div>
      <div className="hidden w-px bg-stone-light"></div>
      <div className="hidden w-px bg-stone-light md:block"></div>
      <div className="hidden w-px bg-stone-light"></div>
      <div className="w-px bg-stone-light md:last-of-type:bg-transparent last-of-type:absolute last-of-type:top-0 last-of-type:right-0 last-of-type:h-full"></div>
    </div>
  </div>
);

export default GuidingLines;
