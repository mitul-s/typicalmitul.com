const CallToAction = () => {
  return (
    <div className="px-6 md:p-4">
      <div className="px-4 py-8 text-white border rounded md:py-12 border-stone md:px-12 bg-dark">
        <div className="flex flex-col mx-auto max-w-7xl gap-y-6 md:gap-y-12">
          <h3 className="-mt-2 text-lg font-bold uppercase md:text-3xl">
            Uber
          </h3>
          <blockquote className="text-2xl !leading-tight md:text-5xl">
            &quot;We worked with Mitul to build an exhibit featuring employee
            stories. He provided high quality work that was on-brief and
            delivered within a tight timeline!&quot;
          </blockquote>
          <div>
            <p className="text-sm font-medium ">Nicole Korb</p>
            <p className="text-xs">Operations Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;