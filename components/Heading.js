function Heading(props) {
  const { as: Component, children } = props;

  return <Component className={"text-2xl uppercase font-medium text-stone"}>{children}</Component>;
}

Heading.defaultProps = {
  as: "h2",
};

export default Heading;
