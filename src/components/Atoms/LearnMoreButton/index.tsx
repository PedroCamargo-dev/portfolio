import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";

const LearnMoreButton = () => {
  return (
    <motion.a
      variants={slideInFromLeft(1)}
      className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
    >
      Learn more!
    </motion.a>
  );
};

export default LearnMoreButton;
