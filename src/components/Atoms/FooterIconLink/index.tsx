import { FC, ReactNode } from "react";

interface FooterIconLinkProps {
  icon: ReactNode;
  text: string;
}

const FooterIconLink: FC<FooterIconLinkProps> = ({ icon, text }) => {
  return (
    <p className="flex flex-row items-center my-[15px] cursor-pointer">
      {icon}
      <span className="text-[15px] ml-[6px]">{text}</span>
    </p>
  );
};

export default FooterIconLink;
