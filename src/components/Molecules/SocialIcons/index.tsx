import SocialIcon from "@/components/Atoms/SocialIcon";
import { Socials } from "@/constants";

const SocialIcons = () => (
  <div className="flex flex-row gap-5">
    {Socials.map((social) => (
      <SocialIcon src={social.src} alt={social.name} key={social.name} />
    ))}
  </div>
);

export default SocialIcons;
