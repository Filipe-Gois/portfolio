"use client";
import ProjectCard from "@/components/Cards";
import Tag from "@/components/Tag";
import { ProjectType } from "@/Types";
import FitTrack from "/public/Images/Projects/FitTrack/fittrack-logo.png";
import EventPlus from "/public/Images/Projects/EventPlus/eventplus-logo.png";
import VitalHub from "/public/Images/Projects/VitalHub/vitalhub-logo.png";
import TechConnect from "/public/Images/Projects/TechConnect/techconnect-logo.png";
import { useState } from "react";
import { ModalVideoProjects } from "@/components/Modal";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");

  const projects: ProjectType[] = [
    {
      urlVideoApplication: "/Videos/Projects/FitTrack/fittrack.mp4",
      urlRepository: "https://github.com/Filipe-Gois/FitTrack",
      title: "FitTrack",
      description: t("fittrack.descricao"),
      skills: [
        "React Native",
        "JavaScript",
        "Styled Components",
        "C#",
        "Microsoft Azure",
        "SQL Server",
        "Trello",
        "Git",
        "Figma",
      ],
      image: {
        alt: "Imagem da tela de login do aplicativo móvel FitTrack.",
        src: FitTrack,
      },
    },
    {
      urlVideoApplication: "/Videos/Projects/VitalHub/vitalhub.mp4",
      skills: [
        "React Native",
        "JavaScript",
        "Styled Components",
        "C#",
        "SQL Server",
        "Trello",
        "Git",
        "Figma",
        "Microsoft Azure",
      ],
      image: {
        alt: "Logo do projeto Vital Hub.",
        src: VitalHub,
      },
      urlRepository: "https://github.com/Filipe-Gois/Vital-Hub",
      title: "Vital Hub",
      description: t("vitalhub.descricao"),
    },
    {
      urlVideoApplication: "",
      urlDeploy: "https://eventplusfilipe.vercel.app",
      skills: [
        "React.JS",
        "JavaScript",
        "CSS3",
        "C#",
        "SQL Server",
        "Figma",
        "Microsoft Azure",
        "Git",
        "Trello",
      ],
      image: {
        alt: "Logo do projeto Event Plus.",
        src: EventPlus,
      },
      urlRepository: "https://github.com/Filipe-Gois/eventplus-finalizado",
      title: "Event Plus",
      description: t("eventplus.descricao"),
    },
    {
      urlVideoApplication: "",
      urlDeploy: "",
      skills: [
        "Next.JS",
        "TypeScript",
        "TailWindCss",
        "C#",
        "SQL Server",
        "Figma",
        "Microsoft Azure",
        "Git",
        "Azure DevOps",
      ],
      image: {
        alt: "Logo do projeto Tech Connect.",
        src: TechConnect,
      },
      urlRepository: "https://github.com/Filipe-Gois/tech-connect",
      title: "Tech Connect",
      description: t("techconnect.descricao"),
    },
  ];
  const uniqueProjects = new Set<ProjectType>(projects);

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section id="projects" className="w-full h-full flex flex-col items-center">
      <Tag title={t("titulo")} />

      <h2 className="paragraph mt-8">{t("sub-titulo")}</h2>

      <div className="mt-16 flex flex-col gap-10">
        {Array.from(uniqueProjects).map((project, index) => (
          <ProjectCard
            setIsOpenModal={setIsOpenModal}
            setSelectedProject={setSelectedProject}
            project={{ ...project, isLeftImage: index % 2 !== 0 }}
            key={index}
          />
        ))}
      </div>

      <ModalVideoProjects
        setIsOpen={setIsOpenModal}
        isOpen={isOpenModal}
        selectedProject={selectedProject}
      />
    </section>
  );
};

export default Projects;
