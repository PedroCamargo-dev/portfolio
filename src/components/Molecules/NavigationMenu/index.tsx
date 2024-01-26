import MenuLink from "@/components/Atoms/MenuLink";

const NavigationMenu = () => (
  <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
    <MenuLink href="#about-me">Sobre</MenuLink>
    <MenuLink href="#skills">Skills</MenuLink>
    <MenuLink href="#projects">Projetos</MenuLink>
  </div>
);

export default NavigationMenu;
