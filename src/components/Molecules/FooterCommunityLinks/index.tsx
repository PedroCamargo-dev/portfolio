import FooterIconLink from "@/components/Atoms/FooterIconLink";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

const FooterCommunityLinks = () => {
  return (
    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
      <div className="font-bold text-[16px]">Comunidade</div>
      <FooterIconLink
        icon={<RxGithubLogo />}
        text="Github"
        href="https://github.com/PedroCamargo-dev"
      />
      <FooterIconLink
        icon={<RxDiscordLogo />}
        text="Discord"
        href="https://discord.gg/Mw9DJrcX"
      />
    </div>
  );
};

export default FooterCommunityLinks;
