import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { ContactDialog } from "@/sections/Contact";
import { SheetContext } from "@/components/Sheet";

const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Gear", href: "/gear" },
  { id: 4, title: "Gallery", href: "/gallery" },
];

const Navigation = () => {
  const router = useRouter();
  const { open, setOpen } = React.useContext(SheetContext);

  return (
    <>
      <ContactDialog open={open} onOpenChange={setOpen} />
        <nav className="fixed z-40 p-1 leading-none -translate-x-1/2 bg-white border rounded shadow-md left-1/2 bottom-6 md:bottom-12 border-dark w-fit">
          <ul className="flex gap-x-0.5 text-base leading-none">
            {navLinks.map((link) => (
              <li key={link.id} className="grid">
                <NextLink href={link.href} passHref>
                  <motion.a
                    whileTap={{
                      scale: 0.95,
                      transition: {
                        type: "spring",
                        duration: 0.15,
                      },
                    }}
                    className={clsx(
                      "inline-block px-5 py-2.5 border border-transparent rounded content text-dark transition-colors duration-250",
                      {
                        "betterhover:hover:border-dark/50":
                          router.pathname !== link.href,
                      }
                    )}
                  >
                    {link.title}
                  </motion.a>
                </NextLink>
                {router.pathname === link.href && (
                  <motion.div
                    layoutId="navItem"
                    className="inline-block px-5 py-2.5 border border-transparent rounded shadow bg-dark overlay invert mix-blend-difference"
                    animate
                  />
                )}
              </li>
            ))}
            <li className="grid">
              <motion.button
                onClick={() => setOpen(true)}
                whileTap={{
                  scale: 0.95,
                  transition: {
                    type: "spring",
                    duration: 0.15,
                  },
                }}
                className="inline-block px-5 py-2.5 transition-colors border border-transparent rounded content text-dark duration-250 betterhover:hover:border-dark/50"
              >
                Contact
              </motion.button>
              {open && (
                <motion.div
                  layoutId="navItem"
                  className="inline-block px-5 py-2.5 border border-transparent rounded shadow bg-dark overlay invert mix-blend-difference"
                  animate
                />
              )}
            </li>
          </ul>
        </nav>
    </>
  );
};

export default Navigation;
