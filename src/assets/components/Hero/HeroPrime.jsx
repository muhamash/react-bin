import { motion } from "framer-motion";
import BannerSticker from "./BannerSticker";
import "./Hero.css";
import RedCircle from "./RedCircle";

const HeroPrime = () =>
{

    const stickerRotateVariants = {
        initial: { rotate: 0 },
        animate: { rotate: 7.5 },
        transition: { delay: 1, duration: 1 }
    };
    
    const stickAnimationVariantOne = {
        initial: { y: 0 },
        animate: { y: -23 },
        transition: { delay: 1, duration: 1 }
    }
    
    const stickAnimationVariantTwo = {
        initial: { y: 0 },
        animate: { y: 15 },
        transition: { delay: 1, duration: 1 }
    }

    const stickVariants = {
        initial: { opacity: 0, y: -70 },
        animate: {
            opacity: 1, y: -50,
            transition: {
                duration: 10,
                ease: "easeOut",
                delay: 0.5,
                type: "spring",
                stiffness: 750,
                damping: 15,
                mass: 1.6,
            }
        },
    };

    return (
        <div className="hero-parent">
            <motion.div
                initial={ stickVariants.initial }
                animate={ stickVariants.animate }
                className="relative grid grid-cols-16 grid-rows-10 medium:w-[450px] medium:h-[350px] smaller:w-[250px] smaller:h-[200px] mx-auto"
            >
                <motion.div className="absolute w-[89%] medium:bottom-8 medium:left-0 smaller:bottom-4 "
                    animate="animate"
                    variants={ stickerRotateVariants }
                    transition={ stickerRotateVariants.transition }
                >
                    <BannerSticker text={ "Discover the magic" } />
                </motion.div>
                <motion.div
                    className="absolute w-full -bottom-[40px] z-20"
                >
                    <BannerSticker text={ "of your desired tech services" }
                    />
                </motion.div>

                <motion.div className="h-auto col-span-2  row-span-10 bg-[#797777] w-[2px] mx-auto relative"
                >
                    <RedCircle />
                </motion.div>
                
                <motion.div
                    animate="animate"
                    variants={ stickAnimationVariantOne }
                    transition={ stickAnimationVariantOne.transition }
                    className="col-start-3 col-span-2 row-span-8  border-[#797777] border-l-[2px] relative">
                    <div className='absolute z-40 -bottom-2 -left-1 smaller:border-[3px] medium:border-[4.5px] rounded-full'>
                        <div className='medium:w-[7px] medium:h-[7px] smaller:w-[5px] smaller:h-[5px] bg-red-600 rounded-full'></div>
                    </div>
                </motion.div>

                <motion.div
                    animate="animate"
                    variants={ stickAnimationVariantTwo }
                    transition={ stickAnimationVariantTwo.transition }
                    className="col-start-12 col-span-3 medium:row-span-8 smaller:row-span-7 bg-[#797777] w-[2px] mx-auto relative">
                    <RedCircle />
                </motion.div>

                <motion.div className=" bg-[#797777] w-[2px] mx-auto col-span-1 row-span-10  relative">
                    <RedCircle />
                </motion.div>
            </motion.div>

            <div className="my-5">
                <p className="header-text medium:text-[70px] smaller:text-[40px]">
                    Order a custom website like you would a pizza. See your price upfront and watch us work.
                </p>
            </div>
        </div>
    );
};

export default HeroPrime;