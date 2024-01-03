import FooterIconLink from "@/components/Atoms/FooterIconLink";
import { FaYoutube } from "react-icons/fa";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

const FooterSocialMediaLinks = () => {
  return (
    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
      <div className="font-bold text-[16px]">Social Media</div>
      <FooterIconLink icon={<FaYoutube />} text="Instagram" />
      <FooterIconLink icon={<RxGithubLogo />} text="Twitter" />
      <FooterIconLink icon={<RxDiscordLogo />} text="Linkedin" />
    </div>
  );
};

export default FooterSocialMediaLinks;
