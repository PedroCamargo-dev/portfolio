import Logo from "@/components/Atoms/Logo";

const Brand = () => (
  <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
    <Logo width={50} height={50} className="rounded-full" />
    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
      Pedro Camargo
    </span>
  </a>
);

export default Brand;
