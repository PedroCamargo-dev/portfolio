import SkillDataProvider from "@/components/SkillDataProvider";
import { FC } from "react";

interface SkillItemProps {
  image: string;
  width: number;
  height: number;
  index: number;
}

const SkillItem: FC<SkillItemProps> = ({ image, width, height, index }) => {
  return (
    <SkillDataProvider
      key={index}
      src={image}
      width={width}
      height={height}
      index={index}
    />
  );
};

export default SkillItem;
