import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { ContactDialog } from "@/sections/Contact";
import { SheetContext } from "@/components/Sheet";
import { Toggle } from "@radix-ui/react-toggle";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cx, cva } from "class-variance-authority";
import { RemoveScroll } from "react-remove-scroll";

const navLinks = [
  // { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Gear", href: "/gear" },
  { id: 4, title: "Gallery", href: "/gallery" },
];

const navigationLink = cva(["cursor-pointer"], {
  variants: {
    intent: {
      desktop: [
        "hidden",
        "sm:block",
        "py-0.5",
        "px-2",
        "transition",
        "rounded",
        "hover:bg-black/10",
        "font-medium",
        "focus:bg-black/10",
        "data-[active='true']:bg-black",
        "data-[active='true']:text-white",
      ],
      mobile: [
        "inline-flex",
        "items-center",
        "w-full",
        "px-4",
        "py-4",
        "text-3xl",
        "leading-none",
        "text-left",
        "border-b",
        "border-stone-light",
      ],
    },
  },
});

const NavigationLink = ({ intent, href, onClick, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <NavigationMenu.Item>
      <NextLink href={href}>
        <NavigationMenu.Link
          data-active={isActive}
          onClick={onClick}
          className={navigationLink({ intent: intent })}
        >
          {children}
        </NavigationMenu.Link>
      </NextLink>
    </NavigationMenu.Item>
  );
};

const Navigation = () => {
  // Contact Dialog
  const { open, setOpen } = React.useContext(SheetContext);
  // Mobile Navigation
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <>
      <ContactDialog open={open} onOpenChange={setOpen} />
      <NavigationMenu.Root>
        <NavigationMenu.List className="pt-4 pb-4 px-4 mx-auto flex items-center justify-center w-full text-md gap-x-2 border-b border-stone-light">
          <NavigationMenu.Item className="mr-auto">
            <NextLink href="/" passHref>
              <NavigationMenu.Link className="font-mtl-bold text-xl">
                Typical Mitul
              </NavigationMenu.Link>
            </NextLink>
          </NavigationMenu.Item>
          {navLinks.map((link) => {
            return (
              <NavigationLink key={link.id} href={link.href} intent="desktop">
                {link.title}
              </NavigationLink>
            );
          })}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              className={navigationLink({ intent: "desktop" })}
              onClick={() => setOpen(true)}
            >
              Contact
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="list-none">
            <NavigationMenu.Trigger className="sm:hidden" asChild>
              <Toggle
                pressed={isMobileNavOpen}
                onPressedChange={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                {isMobileNavOpen ? "Close" : "Menu"}
              </Toggle>
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <RemoveScroll
          enabled={isMobileNavOpen}
          className={cx("sm:hidden", isMobileNavOpen ? "visible" : "invisible")}
        >
          <ul
            className={cx(
              "overflow-y-auto flex flex-col h-screen transition-all absolute w-full pb-8 bg-white",
              isMobileNavOpen ? "opacity-100" : "opacity-0"
            )}
          >
            <NavigationLink
              href="/"
              intent="mobile"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Home
            </NavigationLink>
            {navLinks.map((link) => {
              return (
                <NavigationLink
                  key={link.id}
                  href={link.href}
                  intent="mobile"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {link.title}
                </NavigationLink>
              );
            })}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                className={navigationLink({ intent: "mobile" })}
                onClick={() => {
                  setOpen(true);
                }}
              >
                Contact
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
          </ul>
        </RemoveScroll>
      </NavigationMenu.Root>
    </>
  );
};

const Navigation2 = () => {
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
