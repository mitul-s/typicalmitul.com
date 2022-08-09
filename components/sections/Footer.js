import React, { useState } from "react"
import { motion } from "framer-motion";
import { arrowVariants } from "../../constants";
import { MotionArrowUpRight } from "../../constants";
import { ArrowRight, ArrowUpRight } from "phosphor-react";


const links = [
  {href: "https://www.twitter.com/typicalmitul", text: "Twitter"},
  {href: "https://www.instagram.com/typicalmitul", text: "Instagram"},
  {href: "https://500px.com/typicalmitul", text: "500px"},
  {href: "https://mitul.ca", text: "Personal"},
];

const variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const oppositeVariants = {
  initial: {
    x: 0,
    opacity: 1,
  },
  hover: {
    opacity: 0,
    x: 100,
    transition: {
      type: "tween",
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};



const Footer4 = () => {
  const Item = ({ children }) => (
    <li className="underline underline-offset-2">
      <a href="#">{children}</a>
    </li>
  );
  return (
    <footer className="grid-cols-2 px-6 py-6 text-sm border-t md:text-lg border-stone md:px-4 md:grid">
      {/* <div>
      Typicalmitul
    </div> */}
      <ul className="flex justify-start gap-x-2">
        <Item>Twitter</Item>
        <Item>Instagram</Item>
        <Item>Mail</Item>
      </ul>
    </footer>
  );
}


export {Footer4};

export const Footer2 = () => {
  const [text, setText] = useState("Copy email?");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('typicalmitul@gmail.com');
    setCopied(true);
    setText("Copied!");
    setTimeout(() => {
      setCopied(false);
      setText("Copy email?");
    }, 3000);
    
  };

  return (
    <footer className="px-4 border py-yeat border-t-stone">
      <div className="w-full text-sm uppercase md:flex gap-x-yeat">
        <div className="flex justify-between w-full md:justify-start md:w-1/2 gap-x-4">
          <div>Typical Mitul</div>
          <motion.button
            whileHover="hover"
            animate="initial"
            onClick={copyEmail}
            className="grid overflow-hidden uppercase transition-colors text-dark/50 hover:text-dark"
          >
            <motion.span
              variants={oppositeVariants}
              className="flex items-center content gap-x-0.5"
            >
              Get in touch
              <ArrowRight size={12} className="-mt-0.5" />
            </motion.span>
            <motion.span
              variants={variants}
              className="flex items-center overlay gap-x-0.5"
            >
              <ArrowRight size={12} className="-mt-0.5" />
              {text}
            </motion.span>
          </motion.button>
        </div>
        <div className="grid grid-flow-col grid-rows-2 gap-x-4">
          <div className="row-span-2 text-sm uppercase">Find me online</div>
          {links.map((link, index) => (
            <div key={index}>
              <motion.a
                whileHover="hover"
                animate="initial"
                href={link.href}
                className="inline-flex items-center text-sm uppercase transition text-dark/50 hover:text-dark"
              >
                {link.text}
                <MotionArrowUpRight
                  className="-mt-0.5"
                  variants={arrowVariants}
                  custom={0.25}
                />
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}


const Footer = () => {
  return (
    <footer className="border-t border-dark">
      <div className="flex justify-between px-4 py-2">
        <div className="flex space-x-4">
          <a className="flex items-center cursor-pointer group">
            Instagram
            <ArrowUpRight
              className="-mt-0.5 transition group-hover:rotate-45"
              weight="bold"
            />
          </a>
          <a className="flex items-center cursor-pointer group">
            Twitter
            <ArrowUpRight
              className="-mt-0.5 transition group-hover:rotate-45"
              weight="bold"
            />
          </a>
        </div>
        <a>Contact</a>
      </div>
    </footer>
  );
};


export default Footer2;