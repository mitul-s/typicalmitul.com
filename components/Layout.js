import GuidingLines from "@/components/GuidingLines";
import Navigation from "@/components/Navigation";
import { SheetContext } from "@/components/Sheet";
import { cx } from "class-variance-authority";
import React from "react";

export default function Layout({ children }) {
  const { open } = React.useContext(SheetContext);

  return (
    <div className="relative h-full">
      <Navigation />
      <div
        className={cx(
          "min-h-full will-change-transform transition-all duration-1000 sm:translate-x-0",
          open && "sm:-translate-x-4"
        )}
      >
        <GuidingLines />
        {children}
      </div>
    </div>
  );
}
