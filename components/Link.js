import React from "react";

export const Link = React.forwardRef(
  ({ href, className, isExternal, children, ...rest }, ref) => {
    // const linkClasses = classname({
      
    // })
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        ref={ref}
        className={`${className} link`}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export default Link;