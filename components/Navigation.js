import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Link } from "@components";
import { motion, useViewportScroll } from "framer-motion";

const Navigation2 = () => {
  /** this hook gets the scroll y-axis **/
  const { scrollY } = useViewportScroll();
  /** this hook manages state **/
  const [hidden, setHidden] = useState(false);

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY.current > 100 && scrollY.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  /** update the onChange callback to call for `update()` **/
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0, scale: 1 },
    hidden: { opacity: 0, y: 25, scale: 0.8 },
  };

  return (
    <div className="relative z-40 flex items-center justify-center w-full h-full isolate">
      <motion.nav
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.350 }}
        className="fixed p-1 leading-none bg-white border rounded-full shadow-md bottom-12 border-dark w-fit"
      >
        <ul className="flex gap-x-0.5 text-[16px]">
          <li>
            <NextLink href="/">
              <a className="inline-block px-5 py-3 border border-transparent rounded-full shadow text-md bg-dark text-eggshell">
                Home
              </a>
            </NextLink>
          </li>
          <li>
            <NextLink href="/about">
              <a className="inline-block px-5 py-3 transition border border-transparent rounded-full text-md text-dark hover:border-dark/50 duration-250">
                About
              </a>
            </NextLink>
          </li>
          <li>
            <NextLink href="/">
              <a className="inline-block px-5 py-3 transition border border-transparent rounded-full text-md text-dark hover:border-dark/50 duration-250">
                Work
              </a>
            </NextLink>
          </li>
          <li>
            <NextLink href="/">
              <a className="inline-block px-5 py-3 transition border border-transparent rounded-full text-md text-dark hover:border-dark/50 duration-250">
                Contact
              </a>
            </NextLink>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-4 font-medium uppercase border-b bg-eggshell border-dark">
      <NextLink href="/" passHref>
        <Link>Typical Mitul</Link>
      </NextLink>
      <ul className="flex gap-x-4">
        <li>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/about" passHref>
            <Link>About</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/contact" passHref>
            <Link>Contact</Link>
          </NextLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation2;
