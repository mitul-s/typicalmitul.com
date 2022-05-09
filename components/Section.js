const GuidingLines = () => (
  <div className="absolute w-full h-full">
    <div className="grid-container">
      <div className="!bg-transparent grid-item"></div>
      <div className="grid-item"></div>
    </div>
  </div>
);



const Section = ({ hasGuidingLines, padding, classes, isFullHeight, children  }) => {

  return (
    <>
      {/* {!hasGuidingLines ? <GuidingLines /> : null} */}
      <div className={`${classes}`}>{children}</div>
    </>
  );
};

export default Section;
