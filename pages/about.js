import { ArrowUpRight } from "phosphor-react";
import { motion } from "framer-motion"
import { Break, Text, Button } from "@components";

const arrowVariants = {
  initial: {
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
    }
  },
  hover: {
    x: 3,
    rotate: 45,
    transition: {
      duration: 0.7,
    }
  },
};

// const Button = ({ children, ...props }) => {
//   const MotionArrow = motion(ArrowUpRight);
//   return (
//     <div className="isolate">
//       <motion.button whileHover="hover" animate="initial" className="relative flex items-center px-4 py-1 transition-all duration-1000 rounded-full shadow-md outline-none glow bg-eggshell/50 hover:bg-eggshell hover:ring-4 hover:ring-yolk focus:ring-yolk focus:ring-2 gap-x-1" {...props}>
//         <span>Open Project</span>
//         <MotionArrow className="shrink-0" variants={arrowVariants} />
//       </motion.button>
//     </div>
//   );
// };

export default function About() {
  
  const clients = ["Shopify", "Uber", "Google", "Samsung", "dbrand", "Timbuk2", "Amdocs", "500px", "Delta Hotels"];

  return (
    <main className="relative">
      <div className="flex items-center px-6 my-2 md:px-4 gap-x-yeat">
        <span className="w-6 h-6 border rounded-full bg-yolk border-dark shrink-0"></span>
        <h1 className="text-5xl uppercase">About</h1>
      </div>
      <div className="grid px-6 md:px-4 md:grid-cols-2 gap-x-12">
        <section className="flex flex-col gap-y-4 py-yeat">
          <div className="w-full bg-gray-100 border rounded aspect-3/2"></div>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
            tellus molestie. Vulputate dignissim suspendisse in est. Vel
            pharetra vel turpis nunc.
          </Text>
        </section>
        <section className="flex flex-col">
          <hr className="my-4 text-stone md:hidden" />
          <div className="flex items-center my-2 leading-none uppercase gap-x-2">
            <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
            <h2 className="text-dark">CLIENT HISTORY</h2>
          </div>
          <ul
            className="grid gap-4 mt-2 md:text-4xl whitespace-nowrap"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            }}
          >
            {clients.map((client, index) => (
              <li
                key={index}
                className="px-1.5 py-2.5 text-center border rounded border-stone"
              >
                {client}
              </li>
            ))}
            <li>
              <Button
                fullWidth
                className="text-lg normal-case h-max bg-eggshell border-stone"
              >
                + you next?
              </Button>
            </li>
          </ul>
          <div className="h-px my-6 -mx-6 bg-stone"></div>
          <div className="flex items-center my-2 leading-none uppercase gap-x-2">
            <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
            <h2 className="text-dark">Notable Things</h2>
          </div>
          <ul className="mx-4 divide-y divide-stone/40">
            <li className="flex justify-between py-2">
              Some company{" "}
              <span className="self-end text-sm underline underline-offset-2 text-stone">
                Link
              </span>
            </li>
            <li className="flex justify-between py-2">
              Some company{" "}
              <span className="self-end text-sm underline underline-offset-2 text-stone">
                Link
              </span>
            </li>
            <li className="flex justify-between py-2">
              Some company{" "}
              <span className="self-end text-sm underline underline-offset-2 text-stone">
                Link
              </span>
            </li>
            <li className="flex justify-between py-2">
              Some company{" "}
              <span className="self-end text-sm underline underline-offset-2 text-stone">
                Link
              </span>
            </li>
            <li className="flex justify-between py-2">
              Some company{" "}
              <span className="self-end text-sm underline underline-offset-2 text-stone">
                Link
              </span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}