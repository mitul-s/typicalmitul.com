import classnames from "classnames";

const GuidingLines = () => (
  <div className="absolute w-full h-full">
    <div className="grid-container">
      <div className="!bg-transparent grid-item"></div>
      <div className="grid-item"></div>
    </div>
  </div>
);



const Section = ({ hasGuidingLines, padding, classes, isFullHeight, children  }) => {

    // const sectionClasses = classnames({
    //   // "h-full": isFullHeight,
    //   "min-h-full": isFullHeight,
    //   "relative": true,
    //   // "relative": !isFullHeight,
    // });

    const contentClasses = classnames({
      "relative z-10": true,
      "px-4": padding === undefined,
      // "h-full": isFullHeight,
    });

  return (
    <>
      {/* {!hasGuidingLines ? <GuidingLines /> : null} */}
      <div className={`${contentClasses} ${classes}`}>{children}</div>
    </>
  );
};

export default Section;
