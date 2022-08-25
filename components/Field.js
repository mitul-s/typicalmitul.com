import { cva } from "class-variance-authority";
import { ValidationError } from "@formspree/react";
import React from "react";
import { motion } from "framer-motion";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


const Field = ({ label, name, error, htmlFor, children, ...props }) => {
    const errorMessage = error?.map((e) => e.message);
    
    return (
      <div className="flex flex-col gap-y-1">
        <label
          className="flex items-baseline w-fit"
          onMouseDown={(e) => {
            // prevent text selection when double clicking label
            if (!e.defaultPrevented && e.detail > 1) e.preventDefault();
          }}
          htmlFor={htmlFor}
          {...props}
        >
          {label}
        </label>
        {children}
        {errorMessage && (
          <motion.div
            className="mt-0.5 text-xs leading-none gap-x-1 text-red-500"
            initial={{ height: 0, y: -10, opacity: 0 }}
            animate={{ height: "auto", y: 0, opacity: 1 }}
            transition={{ duration: 0.18 }}
            aria-live="polite"
          >
            {errorMessage}
          </motion.div>
        )}
        {/* <ValidationError field={name} errors={error} /> */}
      </div>
    );
  };

Field.displayName = "Field";

const input = cva(
  [
    "input",
    "border",
    "text-dark",
    "rounded",
    "outline-none",
    "transition-all",
    "duration-250",
    "focus-visible:bg-white",
    "focus-visible:ring-4",
    "py-2",
    "px-2",
    "placeholder:transition-all",
    "placeholder:duration-250",
    "placeholder:text-stone/70",
    "hover:placeholder:text-stone",
    "focus-within:placeholder:text-stone",
    // "text-base",
    "shadow-sm",
    "focus-visible:shadow-md",
  ],
  {
    variants: {
      intent: {
        base: [
          "bg-eggshell",
          "border-stone/50",
          "hover:border-yolk",
          "focus-visible:border-yolk",
          "hover:focus-visible:ring-yolk/50",
          "focus-visible:ring-yolk/50",
        ],
        error: ["border-red-500"],
      },
    },
    defaultVariants: {
      intent: "base",
    },
  }
);

const Input = ({
  id,
  onChange,
  value,
  error,
  type,
  name,
  label,
  spellCheck,
  autoComplete,
  placeholder,
}) => {
  // const intent = error.map((e) => e.message) ? "error" : "base";
  const intent = "base";

  return (
    <Field label={label} htmlFor={id} name={name} error={error}>
      <input
        id={id}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        spellCheck={spellCheck}
        autoComplete={autoComplete}
        className={input({ intent })}
      />
    </Field>
  );
};

const TextArea = ({ id, onChange, value, error, name, label, placeholder, ...props }) => {
  // const intent = error.map((e) => e.message) ? "error" : "base";
  const intent = "base";
  return (
    <Field label={label} htmlFor={id} name={name} error={error}>
      <textarea
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={input({ intent })}
        {...props}
      />
    </Field>
  );
};

export { Input, Field, TextArea };
