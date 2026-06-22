import GuidingLines from "@/components/GuidingLines";
import Navigation from "@/components/Navigation";
import { SheetContext } from "@/components/Sheet";
import { cx } from "class-variance-authority";
import React from "react";

export default function Layout({ children }) {
  const { open } = React.useContext(SheetContext);

  return (
    <div className="relative h-full mx-auto max-w-[1792px]">
      <header className="relative z-20 w-full mx-auto isolate">
        <Navigation />
      </header>
      <div
        className={cx(
          "min-h-full will-change-transform transition-all duration-1000 sm:translate-x-0",
          open && "sm:-translate-x-4"
        )}
      >
        {children}
      </div>
    </div>
  );
}
