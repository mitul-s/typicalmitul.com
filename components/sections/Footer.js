import React from "react"
import { ArrowUpRight } from "phosphor-react";


const Footer = () => {
  return (
    <footer className="border-t border-dark">
      <div className="flex justify-between px-4 py-2 font-medium uppercase">
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


export default Footer;