import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { FC } from "react";

interface WelcomeBoxProps {
  textBox: string;
}

const WelcomeBox: FC<WelcomeBoxProps> = ({ textBox }) => {
  return (
    <motion.div
      variants={slideInFromTop}
      className="Welcome-box py-[8px] px-[7px] border border-[#4042f88b] opacity-[0.9]"
    >
      <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
      <h1 className="Welcome-text text-[13px]">{textBox}</h1>
    </motion.div>
  );
};

export default WelcomeBox;
