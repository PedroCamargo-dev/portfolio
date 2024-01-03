import Image from "next/image";
import { FC } from "react";

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: FC<SocialIconProps> = ({ src, alt }) => (
  <Image src={src} alt={alt} width={24} height={24} />
);

export default SocialIcon;
