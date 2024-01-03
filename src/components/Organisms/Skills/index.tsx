import SkillSection from "@/components/Molecules/SkillSection";
import SkillText from "@/components/Molecules/SkillText";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <SkillSection skills={Frontend_skill} />
      <SkillSection skills={Backend_skill} />
      <SkillSection skills={Full_stack} />
      <SkillSection skills={Other_skill} />

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
