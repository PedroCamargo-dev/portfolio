import FooterCommunityLinks from "@/components/Molecules/FooterCommunityLinks";
import FooterSocialMediaLinks from "@/components/Molecules/FooterSocialMediaLinks";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <FooterCommunityLinks />
          <FooterSocialMediaLinks />
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Pedro Camargo {currentYear} Inc. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
}
