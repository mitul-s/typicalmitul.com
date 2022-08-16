const Text = ({ children, className }) => {
    return <p className={`text-2xl ${className}`}>{children}</p>;
}

export default Text;