const CallToAction = () => {
  return (
    <div className="grid grid-cols-4 p-4 gap-x-2">
      <div className="col-span-6 px-8 py-12 space-y-12 text-white border-2 rounded border-stone md:px-24 bg-dark">
        <h3 className="text-3xl font-bold uppercase">Uber</h3>
        <blockquote className="text-3xl md:text-5xl max-w-prose">
          &quot;We worked with Mitul to build an exhibit featuring employee
          stories. He provided high quality work that was on-brief and delivered
          within a tight timeline!&quot;
        </blockquote>
        <div>
          <p className="font-medium">Nicole Korb</p>
          <p className="text-sm">Operations Manager</p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;