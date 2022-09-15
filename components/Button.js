import React from "react";
import { cva } from "class-variance-authority";

const button = cva(["button"], {
  variants: {
    intent: {
      primary: [
        "bg-yolk",
        "text-dark",
        "border-dark",
        "betterhover:hover:bg-yolk/75",
        "font-medium",
        "outline-none",
        "focus:ring-4",
        // "hover:focus:ring-yolk/50",
        // "focus:ring-blue/50",
      ],
    },
    fullWidth: {
      true: ["w-full"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export const Button = React.forwardRef(
  (
    { asAnchor, type, intent, fullWidth, className, children, ...props },
    forwardRef
  ) => {
    const Component = asAnchor ? "a" : "button";
    const defaultType = asAnchor ? undefined : "button";

    return (
      <Component
        type={type ?? defaultType}
        className={button({ intent, fullWidth, class: className })}
        ref={forwardRef}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
