import Image from "next/image";

const Logo = () => (
  <Image
    src="/NavLogo.png"
    alt="Logo"
    width={50}
    height={50}
    className="cursor-pointer hover:animate-slowspin rounded-full"
  />
);

export default Logo;
