import Image from "next/image";

const Logo = () => (
  <Image
    src="/NavLogo.png"
    alt="Logo"
    width={70}
    height={70}
    className="cursor-pointer hover:animate-slowspin"
  />
);

export default Logo;
