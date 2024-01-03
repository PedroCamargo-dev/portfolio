import Image from "next/image";
import { slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      variants={slideInFromRight(0.8)}
      className="w-full h-full flex justify-center items-center"
    >
      <Image
        src="/mainIconsdark.svg"
        alt="Work icons"
        height={650}
        width={650}
      />
    </motion.div>
  );
};

export default HeroImage;
