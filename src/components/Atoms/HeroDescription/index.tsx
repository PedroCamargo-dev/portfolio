import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";

const HeroDescription = () => {
  return (
    <motion.p
      variants={slideInFromLeft(0.8)}
      className="text-lg text-gray-400 my-5 max-w-[600px]"
    >
      I&apos;m a Front-end developer, I love to create beautiful and functional
      interfaces, I&apos;m always looking for new challenges and learning new
      technologies.
    </motion.p>
  );
};

export default HeroDescription;
