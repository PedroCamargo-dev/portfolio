import { FC, ReactNode } from "react";

interface FooterIconLinkProps {
  icon: ReactNode;
  text: string;
  href: string;
}

const FooterIconLink: FC<FooterIconLinkProps> = ({ icon, text, href }) => {
  return (
    <a href={href} className="z-50" target="_blank">
      <p className="flex flex-row items-center my-[15px] cursor-pointer">
        {icon}
        <span className="text-[15px] ml-[6px]">{text}</span>
      </p>
    </a>
  );
};

export default FooterIconLink;
