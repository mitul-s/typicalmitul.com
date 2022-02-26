

const Marquee = () => {
  return (
    <div className="flex py-2 overflow-hidden">
      <div className="flex items-center justify-center h-full py-1.5 uppercase rounded bg-yolk marquee-container">
        <div className="w-full marquee-item">
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
