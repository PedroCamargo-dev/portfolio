import Brand from "@/components/Molecules/Brand";
import NavigationMenu from "@/components/Molecules/NavigationMenu";
import SocialIcons from "@/components/Molecules/SocialIcons";

const Navbar = () => (
  <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
    <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
      <Brand />
      <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
        <NavigationMenu />
      </div>
      <SocialIcons />
    </div>
  </div>
);

export default Navbar;
