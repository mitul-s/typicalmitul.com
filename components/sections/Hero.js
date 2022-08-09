import NextImage from "next/image";
import { motion } from "framer-motion";
import { useIsSmall } from "@/hooks/useBreakpoint";

let us3 =
  "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147142/Typical%20Mitul/Test/IMG_1448_mjrtnf.jpg";

const Hero = () => {
  const isSmall = useIsSmall();
  return (
    <motion.section
      className="w-screen hero"
      layout
      animate={{ padding: isSmall ? 24 : `16px 24px` }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <div className="grid h-full rounded isolate md:ring-2 ring-offset-4 ring-yolk md:shadow shadow-yolk">
        <div className="z-10 flex items-center justify-center overlay">
          <h1 className="-mt-4 text-3xl text-center text-white md:text-6xl font-mtl-bold">
            Capturing the world <br /> and chasing life
          </h1>
        </div>
        <motion.div
          className="relative flex items-center justify-center w-full h-full overflow-hidden content brightness-50"
          layout
          animate={{ borderRadius: "8px" }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <NextImage
            src={
              "https://res.cloudinary.com/dcf2075hg/image/upload/v1647147142/Typical%20Mitul/Test/IMG_1448_mjrtnf.jpg"
            }
            layout="fill"
            objectFit="cover"
            alt="me"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;