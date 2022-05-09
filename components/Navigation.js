import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import NextLink from "next/link";
import { AnimateSharedLayout, motion, useViewportScroll } from "framer-motion";


const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  // { title: "Gear", href: "/gear" },
  // { title: "Contact", href: "/contact" },
];

const Navigation = () => {
  const router = useRouter();
  
  /** this hook gets the scroll y-axis **/
  const { scrollY } = useViewportScroll();
  const [hidden, setHidden] = useState(false);


  function update() {
    if (scrollY.current < scrollY?.prev) {
      setHidden(false);
      // const delay = setTimeout(() => {setHidden(false);}, 500);
      // return () => clearTimeout(delay);
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
      <AnimateSharedLayout>
        <motion.nav
          variants={variants}
          animate={hidden ? "hidden" : "visible"}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.35 }}
          className="fixed p-1 leading-none bg-white border rounded-full shadow-md bottom-12 border-dark w-fit"
        >
          <ul className="flex gap-x-0.5 text-base leading-none">
            {navLinks.map((link, index) => (
              <li key={index} className="grid">
                <NextLink href={link.href} passHref>
                  <motion.a
                  whileTap={{
                    scale: 0.95,
                    transition: {
                        type: "spring",
                        duration: 0.15,
                    }
                  }}
                    className={clsx(
                      "inline-block px-5 py-3 border border-transparent rounded-full content text-dark transition-colors duration-250",
                      {
                        "hover:border-dark/50": router.pathname !== link.href,
                      }
                    )}
                  >
                    {link.title}
                  </motion.a>
                </NextLink>
                {router.pathname === link.href && (
                  <motion.div
                    layoutId="navItem"
                    className="inline-block px-5 py-3 border border-transparent rounded-full shadow bg-dark overlay invert mix-blend-difference"
                    animate
                    transition={{ type: "spring", ease: "circInOut", bounce: 0.16, duration: 0.85 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </motion.nav>
      </AnimateSharedLayout>
    </div>
  );
};

export default Navigation;
