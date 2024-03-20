import { motion } from "framer-motion";
import BannerSticker from './BannerSticker';
import "./Hero.css";
import Stick from "./Stick";

const Hero = () =>
{
  const stickerVariants = {
    initial: { y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stickerRotateVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 8 },
    transition: { duration: 2 }
  };

  const stickVariants = {
    initial: { opacity: 0, y: -70 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.3 }
  };

  return (
    <motion.div
      initial={ stickVariants.initial }
      animate={ stickVariants.animate }
      transition={ stickVariants.transition }
      className="relative grid grid-cols-6 grid-rows-10 w-[40%] medium:mx-auto">
      
      <motion.div
        className="absolute w-[75%] left-3 bottom-[50px]  z-10"
        animate="animate"
        variants={ stickerRotateVariants }
        transition={ stickerRotateVariants.transition }
      >
        <BannerSticker text={ "Discover the magic" } />
      </motion.div>

      <motion.div className="absolute w-[90%] -bottom-[35px] z-10"
        initial={ stickerVariants.initial }
        animate={ stickerVariants.animate }
        transition={ { ...stickerVariants.transition,} }>
        <BannerSticker
          text={ "of your desired tech services" }
          initial={ { rotate: 0 } }
          animate={ { rotate: 8 } }
          transition={ { duration: 10, delay: 5 } }
        />
      </motion.div>

      <motion.div
        className="place-self-center medium:h-[250px] smaller:h-[180px] col-start-1 row-span-10 row-start-1 z-0">
        <Stick />
      </motion.div>
      <motion.div className=" col-start-2 row-span-6">
        <Stick />
      </motion.div>
      <motion.div className="col-start-5 row-span-7">
        <Stick />
      </motion.div>
      <motion.div className="row-span-10">
        <Stick />
      </motion.div>
    </motion.div>
  );
};

export default Hero;