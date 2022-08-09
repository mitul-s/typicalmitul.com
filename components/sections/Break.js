import { Plus } from "phosphor-react";
import { motion } from "framer-motion";
import React from "react";


const MotionPlusIcon = motion(Plus);
const PlusIcon = () => {
  return (
    <MotionPlusIcon
      whileHover={{ rotate: 90 }}
      className="w-6 h-6 rounded-full sm:w-8 sm:h-8 bg-eggshell last:absolute last:top-0 last:-right-6 sm:last:-right-8 even:invisible md:even:visible"
    />
  );
};

const Break = () => (
  <div className="grid w-full px-4 py-6">
    <hr className="self-center content border-stone"></hr>
    <div className="relative grid w-full h-full max-w-full grid-cols-4 grid-rows-1 pl-px my-0 -mx-3 sm:-mx-4 overlay">
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
    </div>
  </div>
);

export default Break;
