function Heading(props) {
 const { as: Component, children } = props;
 
 return (
        <Component className="title">
            {children}
        </Component>
    )
}

Heading.defaultProps = {
 as: 'h2',
};

export default Heading;