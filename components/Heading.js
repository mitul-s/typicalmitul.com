// import classnames from "classnames";

function Heading(props) {
  const { as: Component, children } = props;
//   const headingClasses = classnames({
//     "text-2xl": true,
//   });

  return <Component className={"text-3xl text-dark"}>{children}</Component>;
}

Heading.defaultProps = {
  as: "h2",
};

export default Heading;
