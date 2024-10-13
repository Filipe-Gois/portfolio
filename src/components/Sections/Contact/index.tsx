"use client";
import { SectionContainer } from "@/components/Containers";
import SubTitle from "@/components/SubTitle";
import Tag from "@/components/Tag";
import { SocialMediasContact, ContactActions } from "./ContactActions";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <SectionContainer id="contact">
      <Tag transition={{ duration: 0.5 }} title={t("titulo")} />
      <SubTitle
        transition={{ duration: 0.5 }}
        isSm
        className="!max-w-[50%] !text-center"
      >
        {t("sub-titulo")}
      </SubTitle>

      <ContactActions />
      <SocialMediasContact descricao={t("descricao")} />
    </SectionContainer>
  );
};

export default Contact;
