"use client";

import HeroDescription from "@/components/Atoms/HeroDescription";
import HeroImage from "@/components/Atoms/HeroImage";
import HeroText from "@/components/Atoms/HeroText";
import LearnMoreButton from "@/components/Atoms/LearnMoreButton";
import WelcomeBox from "@/components/Atoms/WelcomeBox";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      id="about-me"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <WelcomeBox textBox="Front-end" />
        <HeroText />
        <HeroDescription />
        <LearnMoreButton />
      </div>
      <HeroImage />
    </motion.div>
  );
};

export default HeroSection;
