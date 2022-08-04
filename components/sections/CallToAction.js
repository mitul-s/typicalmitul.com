const CallToAction = () => {
  return (
    <div className="grid grid-cols-4 p-6 py-12 md:p-4 gap-x-2">
      <div className="flex flex-col col-span-6 px-4 py-8 text-white border-2 rounded gap-y-6 md:py-12 md:gap-y-12 border-stone md:px-24 bg-dark">
        <h3 className="-mt-2 text-lg font-bold uppercase md:text-3xl">Uber</h3>
        <blockquote className="text-xl !leading-tight md:text-5xl max-w-prose">
          &quot;We worked with Mitul to build an exhibit featuring employee
          stories. He provided high quality work that was on-brief and delivered
          within a tight timeline!&quot;
        </blockquote>
        <div>
          <p className="text-sm font-medium ">Nicole Korb</p>
          <p className="text-xs">Operations Manager</p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;