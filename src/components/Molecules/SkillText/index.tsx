"use client";

import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";

export default function SkillText() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Criando aplicativos com tecnologias modernas
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Sempre buscando aprender novas tecnologias e melhorar minhas habilidades
      </motion.div>
    </div>
  );
}
