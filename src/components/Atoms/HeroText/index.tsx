import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      variants={slideInFromLeft(0.5)}
      className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[650px] w-auto h-auto"
    >
      <span>
        Concedendo
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
          {" "}
          a melhor{" "}
        </span>
        experiência de usuários
      </span>
    </motion.div>
  );
};

export default HeroText;
