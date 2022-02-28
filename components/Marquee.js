import { motion } from "framer-motion";

const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  };

export const Marquee = () => {
 return (
   <>
     <div className="py-1.5 my-2 overflow-x-hidden rounded bg-yolk inline-block pointer-events-none relative w-full">
       <motion.div
         className="w-full space-x-4 tracking-tight uppercase whitespace-nowrap will-change-transform"
         variants={marqueeVariants}
         animate="animate"
       >
         {[...Array(10)].map((e, i) => (
           <span key={i}>Available for work</span>
         ))}
       </motion.div>
     </div>
   </>
 );
}

export default Marquee;
