import { FC } from "react";
import SkillData from "../SkillData";

interface SkillItemProps {
  image: string;
  width: number;
  height: number;
  index: number;
}

const SkillItem: FC<SkillItemProps> = ({ image, width, height, index }) => {
  return (
    <SkillData
      key={index}
      src={image}
      width={width}
      height={height}
      index={index}
    />
  );
};

export default SkillItem;
