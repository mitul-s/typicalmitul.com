import NextImage from "next/image";
import { motion } from "framer-motion";
import { useIsSmall } from "@/hooks/useBreakpoint";
import nyc_lookdown from "../../public/images/new-york-city-lookdown.jpg";

const Hero = () => {
  const isSmall = useIsSmall();

  return (
    <motion.section
      className="w-screen hero"
      layout
      animate={{ padding: isSmall ? 24 : `16px 24px` }}
      transition={{ delay: 1.2, duration: 1.2 }}
    >
      <div className="grid h-full isolate shadow-md shadow-yolk rounded-[8px]">
        <div className="z-10 flex items-center justify-center overlay">
          <motion.h1
            className="-mt-4 text-3xl text-center text-white md:text-6xl font-mtl-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Capturing the world <br /> and chasing life
          </motion.h1>
        </div>
        <motion.div
          className="relative flex items-center justify-center w-full h-full overflow-hidden content brightness-50"
          layout
          animate={{ borderRadius: "8px" }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <NextImage
            src={nyc_lookdown}
            layout="fill"
            objectFit="cover"
            priority
            alt="Photo of New York City streets filled with yellow taxi cabs, taken from on top of a building with a reflection of the streets."
            quality={5}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
