"use client";
import ProjectCard from "@/components/Cards";
import Tag from "@/components/Tag";
import { ProjectType } from "@/Types";
import ImageFilipe from "/public/Images/Filipe.jpeg";
import FitTrack from "/public/Images/Projects/FitTrack/fittrack-logo.png";
import EventPlus from "/public/Images/Projects/EventPlus/eventplus-logo.png";
import VitalHub from "/public/Images/Projects/VitalHub/vitalhub-logo.png";
import { useState } from "react";

const Projects = () => {
  const projects: ProjectType[] = [
    {
      urlVideoApplication: "",
      urlRepository: "https://github.com/Filipe-Gois/FitTrack",
      title: "FitTrack",
      description:
        "FitTrack é um aplicativo móvel desenvolvido para facilitar o gerenciamento integrado de treinos e alimentação, ajudando os usuários a definirem metas de saúde e bem-estar. A plataforma oferece uma solução completa ao acompanhar tanto o progresso físico quanto a dieta em um único lugar.",
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
      urlVideoApplication: "",
      skills: [
        "React Native",
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
      description:
        "O VitalHub é uma plataforma móvel que simplifica a interação entre médicos e pacientes, centralizando agendamentos, consultas e comunicação. A solução permite o agendamento eficiente de consultas, visualização de trajetos até a clínica via GPS e contato direto com os médicos, otimizando a experiência de ambos e eliminando a fragmentação no processo.",
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
      description:
        "O Event Plus é uma aplicação web intuitiva e robusta voltada para o gerenciamento completo de eventos de instituições. A plataforma permite o planejamento, organização e gerenciamento de eventos de forma eficaz, otimizando o processo desde a criação até a finalização.",
    },
  ];
  const uniqueProjects = new Set<ProjectType>(projects);

  const [urlVideoSelected, setUrlVideoSelected] = useState("");

  return (
    <section className="w-full h-full flex flex-col items-center">
      <Tag title="Projetos" />

      <span className="paragraph mt-8">Alguns dos projetos que construí: </span>

      <div className="mt-16 flex flex-col gap-10">
        {Array.from(uniqueProjects).map((project, index) => (
          <ProjectCard
            setUrlVideoSelected={setUrlVideoSelected}
            urlVideoSelected={urlVideoSelected}
            project={{ ...project, isLeftImage: index % 2 !== 0 }}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
