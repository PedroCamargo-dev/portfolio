import SkillItem from "@/components/Atoms/SkillItem";
import { FC } from "react";

interface SkillSectionProps {
  skills: {
    Image: string;
    width: number;
    height: number;
  }[];
}

const SkillSection: FC<SkillSectionProps> = ({ skills }) => {
  return (
    <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          image={skill.Image}
          width={skill.width}
          height={skill.height}
          index={index}
        />
      ))}
    </div>
  );
};

export default SkillSection;
