import { FC, ReactNode } from "react";

interface MenuLinkProps {
  href: string;
  children: ReactNode;
}

const MenuLink: FC<MenuLinkProps> = ({ href, children }) => (
  <a href={href} className="cursor-pointer">
    {children}
  </a>
);

export default MenuLink;
