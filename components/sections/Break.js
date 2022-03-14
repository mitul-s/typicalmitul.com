import { Plus } from "phosphor-react";
import { motion } from "framer-motion";
import React from "react";

const PlusWrapper = React.forwardRef((props, ref) => (
  <Plus ref={ref} {...props} />
));
PlusWrapper.displayName = "PlusWrapper";
const MotionPlusIcon = motion(PlusWrapper);
const PlusIcon = () => {
  return (
    <MotionPlusIcon
      whileHover={{ rotate: 90 }}
      size={32}
      className="bg-eggshell last:absolute last:top-0 last:-right-8"
    />
  );
};

const Break = () => (
  <div className="grid w-full px-4 py-6">
    <hr className="self-center content border-stone"></hr>
    <div className="relative grid w-full h-full max-w-full grid-cols-4 grid-rows-1 pl-px my-0 -mx-4 overlay">
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
    </div>
  </div>
);

export default Break;
