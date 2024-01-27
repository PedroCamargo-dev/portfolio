import Image from "next/image";
import { FC } from "react";

interface LogoProps {
  width: number;
  height: number;
  className?: string;
}

const Logo: FC<LogoProps> = ({ width, height, className }) => (
  <Image
    src="/NavLogo.png"
    alt="Logo"
    width={width}
    height={height}
    className={`cursor-pointer hover:animate-slowspin ${className}`}
  />
);

export default Logo;
