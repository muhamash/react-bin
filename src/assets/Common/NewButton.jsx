import { motion } from "framer-motion";

const NewButton = ( { text, onClick } ) =>
{
  return (
    <div className={ `bg-black rounded-[20px] w-fit p-[1.2px]` }>
      <motion.div
        className={ `cursor-pointer w-full rounded-[20px] bg-yellow-400 px-[20px] py-[5px] text-center` }
        whileHover={ {
          translateY: "-5px",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
            ease: "easeOut",
          },
        } }
        onClick={ onClick }
      >
        { text }
      </motion.div>
    </div>
  );
};

export default NewButton;