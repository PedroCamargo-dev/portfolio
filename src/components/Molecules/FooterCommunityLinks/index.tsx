import FooterIconLink from "@/components/Atoms/FooterIconLink";
import { FaYoutube } from "react-icons/fa";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

const FooterCommunityLinks = () => {
  return (
    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
      <div className="font-bold text-[16px]">Community</div>
      <FooterIconLink icon={<FaYoutube />} text="Youtube" />
      <FooterIconLink icon={<RxGithubLogo />} text="Github" />
      <FooterIconLink icon={<RxDiscordLogo />} text="Discord" />
    </div>
  );
};

export default FooterCommunityLinks;
