import { motion } from "framer-motion";

const marqueeVariants = {
    animate: {
      x: [0, -1036],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

export const Marquee = () => {
 return (
   <>
     <div className="w-full max-w-full py-1.5 my-2 overflow-x-hidden rounded bg-yolk">
       <motion.div
         className="space-x-1.5 tracking-tight uppercase cursor-default select-none whitespace-nowrap will-change-transform"
         variants={marqueeVariants}
         animate="animate"
       >
         {[...Array(20)].map((e, i) => (
           <span key={i}>Available for work</span>
         ))}
       </motion.div>
     </div>
   </>
 );
}

export default Marquee;
