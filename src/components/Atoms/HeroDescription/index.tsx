import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";

const HeroDescription = () => {
  return (
    <motion.p
      variants={slideInFromLeft(0.8)}
      className="text-lg text-gray-400 my-5 max-w-[600px]"
    >
      E aí, galera! Sou o Pedro, um entusiasta do Front-End de 21 anos.
      Trabalhar com TypeScript, ReactJS e Next.js é a minha praia. Adoro
      transformar ideias em código e ver a mágica acontecer no navegador. Se
      você também é fã dessas tecnologias ou quer trocar uma ideia, é só me
      chamar.
    </motion.p>
  );
};

export default HeroDescription;
