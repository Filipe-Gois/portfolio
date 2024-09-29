"use client";
import { ServiceCard } from "@/components/Cards";
import { Slide, Slider } from "@/components/Slider";
import Tag from "@/components/Tag";
import { offeredService } from "@/Types";
import { useEffect, useState } from "react";

const Services = () => {
  const offeredServices: offeredService[] = [
    {
      title: "Desenvolvimento de Aplicativos Móveis",
      description:
        "Desenvolvo aplicativos para Android e iOS utilizando React Native, com interfaces modernas e funcionalidades eficientes.",
    },
    {
      title: "Criação de Sites",
      description:
        "Transformo suas ideias em um site profissional e atrativo, focado em transmitir sua mensagem de forma clara e eficaz.",
    },
    {
      title: "Desenvolvimento de APIs e Back-end",
      description:
        "Crio APIs robustas e escaláveis utilizando C#, integradas com bancos de dados como SQL Server e MongoDB.",
    },
    {
      title: "Integração e Automação com Microsoft Azure",
      description:
        "Implemento soluções na nuvem, configurando pipelines de CI/CD com Azure DevOps, além de automação de infraestrutura e serviços.",
    },
    {
      title: "Otimização de Performance Web",
      description:
        "Melhoro o desempenho de sites e aplicativos, garantindo uma navegação rápida e eficiente, otimizando para SEO e acessibilidade.",
    },
    {
      title: "Design de Interfaces Responsivas",
      description:
        "Crio interfaces intuitivas e responsivas com React, Next.js e Tailwind CSS, que se adaptam perfeitamente a qualquer dispositivo.",
    },
    {
      title: "Soluções de DevOps",
      description:
        "Configuro pipelines de desenvolvimento contínuo com Git e Azure DevOps, facilitando a integração de novos recursos com segurança.",
    },
    {
      title: "Gerenciamento de Projetos",
      description:
        "Gerencio projetos de software utilizando Trello e metodologias ágeis, garantindo organização e prazos cumpridos.",
    },
    {
      title: "Integração de Banco de Dados",
      description:
        "Realizo a integração e otimização de bancos de dados relacionais e não-relacionais, como SQL Server e MongoDB, para armazenamento eficiente de dados.",
    },
    {
      title: "Desenvolvimento Full-Stack",
      description:
        "Crio aplicações completas, desde o front-end até o back-end, utilizando tecnologias como React, C#, MongoDB, e SQL Server.",
    },
    {
      title: "Manutenção e Suporte Técnico",
      description:
        "Ofereço suporte contínuo para garantir que seus sistemas e aplicativos funcionem de maneira estável e segura.",
    },
  ];

  const uniqueOfferedServices = new Set<offeredService>(offeredServices);

  const [settingsSlides, setSettingsSlides] = useState({
    spaceBetween: 0,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    navigation: true,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSettingsSlides({
          ...settingsSlides,
          slidesPerView: 1,
          spaceBetween: 20,
        });
      } else if (window.innerWidth < 1280) {
        setSettingsSlides({
          ...settingsSlides,
          slidesPerView: 2,
          spaceBetween: 0,
        });
      } else {
        setSettingsSlides({
          ...settingsSlides,
          slidesPerView: 3,
          spaceBetween: 0,
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="services" className="w-full h-full flex flex-col items-center">
      <Tag title="Serviços" />

      <h2 className="paragraph mt-8">O que posso fazer por você: </h2>
      <div className="mt-8 w-full">
        <Slider className="" settings={settingsSlides}>
          {Array.from(uniqueOfferedServices).map((service, index) => {
            return (
              <Slide className="mb-8" key={index}>
                <ServiceCard service={service} />
              </Slide>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
