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

export const Marquee2 = () => {
 return (
   <>
     <div className="relative w-full max-w-full py-1 my-2 overflow-x-hidden rounded bg-yolk">
       <motion.div
         className="uppercase whitespace-nowrap"
         variants={marqueeVariants}
         animate="animate"
       >
         {[...Array(20)].map((e, i) => <span className="mx-1 tracking-tight" key={i}>Available for work</span>)}
       </motion.div>
     </div>
   </>
 );
}


const Marquee = () => {
  return (
    <div className="flex py-2 overflow-hidden">
      <div className="flex items-center justify-center h-full py-1.5 uppercase rounded bg-yolk marquee-container">
        <div className="w-full marquee-item">
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
          <span className="whitespace-nowrap">Available for work</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
