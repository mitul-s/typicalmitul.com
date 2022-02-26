import React from "react"
let baseClasses = "flex justify-between w-full px-4 py-4 font-medium text-left uppercase rounded bg-yolk";

export const ButtonLink = React.forwardRef(({ href, children }, ref) => {
  return (
    <a href={href} className={baseClasses} ref={ref}>
      {children}
    </a>
  )
});

ButtonLink.displayName = "ButtonLink";

export const Button = ({ children }) => {
  return (
    <button className={baseClasses}>
      {children}
    </button>
  );
};

