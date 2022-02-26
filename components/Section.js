import classnames from "classnames";

const GuidingLines = () => (
  <div className="absolute w-full h-full">
    <div className="grid-container">
      <div className="!bg-transparent grid-item"></div>
      <div className="grid-item"></div>
    </div>
  </div>
);



const Section = ({ hasGuidingLines, padding, isFullHeight, children }) => {

    const sectionClasses = classnames({
      "h-full": isFullHeight,
    });

    const contentClasses = classnames({
      "relative z-10": true,
      "px-4": padding === undefined,
      "h-full": isFullHeight,
    });

  return (
    <section className={sectionClasses}>
      {!hasGuidingLines ? <GuidingLines /> : null}
      <div className={contentClasses}>{children}</div>
    </section>
  );
};

export default Section;
