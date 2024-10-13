import Tag from "@/components/Tag";
import { useTranslations } from "next-intl";
import OfferedServicesSlider from "./OfferedServicesSlider";
import { SectionContainer } from "@/components/Containers";
import SubTitle from "@/components/SubTitle";

const Services = () => {
  const t = useTranslations("Services");

  return (
    <SectionContainer id="services">
      <Tag title={t("titulo")} />

      <SubTitle isSm>{t("sub-titulo")}</SubTitle>
      <div className="mt-8 w-full">
        <OfferedServicesSlider />
      </div>
    </SectionContainer>
  );
};

export default Services;
