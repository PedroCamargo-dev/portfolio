import Logo from "@/components/Atoms/Logo";

const Brand = () => (
  <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
    <Logo />
    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
      Pedro Camargo
    </span>
  </a>
);

export default Brand;
