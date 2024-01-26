import FooterIconLink from "@/components/Atoms/FooterIconLink";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

const FooterSocialMediaLinks = () => {
  return (
    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
      <div className="font-bold text-[16px]">Redes Sociais</div>
      <FooterIconLink
        icon={<RxInstagramLogo />}
        text="Instagram"
        href="https://www.instagram.com/pedro_cmargo_/"
      />
      <FooterIconLink
        icon={<RxLinkedinLogo />}
        text="Linkedin"
        href="https://www.linkedin.com/in/pedroc-dev/"
      />
    </div>
  );
};

export default FooterSocialMediaLinks;
