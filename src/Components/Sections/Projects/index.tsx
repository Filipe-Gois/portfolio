import ProjectCard from "@/components/Cards";
import Tag from "@/components/Tag";
import { ProjectType } from "@/Types";
import ImageFilipe from "/public/Images/Filipe.jpeg";
import FitTrack from "/public/Images/Projects/fittrack-logo.png";

const Projects = () => {
  const projects: ProjectType[] = [
    {
      urlRepository: "https://github.com/Filipe-Gois/FitTrack",
      title: "FitTrack",
      description:
        "FitTrack é um aplicativo móvel desenvolvido para facilitar o gerenciamento integrado de treinos e alimentação, ajudando os usuários a definirem metas de saúde e bem-estar. A plataforma oferece uma solução completa ao acompanhar tanto o progresso físico quanto a dieta em um único lugar.",
      skills: [
        "React Native",
        "JavaScript",
        "C#",
        "Microsoft Azure",
        "Git",
        "SQL Server",
        "Trello",
        "Figma",
      ],
      image: {
        alt: "Imagem da tela de login do aplicativo móvel FitTrack.",
        src: FitTrack,
      },
    },
    {
      urlDeploy: "ASDASD",
      skills: [
        "C#",
        "Dart",
        "Azure DevOps",
        "CSS3",
        "Figma",
        "Git",
        "React Native",
        "Microsoft Azure",
      ],
      image: {
        alt: "teste",
        src: ImageFilipe,
      },
      urlRepository: "",
      title: "teste",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam placeat perspiciatis nulla omnis voluptatibus, dolorum delectus ab sint quo neque quas, dolores facere iusto, corrupti consequatur quasi itaque animi?",
    },
    {
      urlDeploy: "ASDASD",
      skills: [
        "C#",
        "Dart",
        "Azure DevOps",
        "CSS3",
        "Figma",
        "Git",
        "React Native",
        "Microsoft Azure",
      ],
      image: {
        alt: "teste",
        src: ImageFilipe,
      },
      urlRepository: "",
      title: "teste",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam placeat perspiciatis nulla omnis voluptatibus, dolorum delectus ab sint quo neque quas, dolores facere iusto, corrupti consequatur quasi itaque animi?",
    },
  ];

  const uniqueProjects = new Set<ProjectType>(projects);

  return (
    <section className="w-full h-full flex flex-col items-center">
      <Tag title="Projetos" />

      <span className="paragraph mt-8">Alguns dos projetos que construí: </span>

      <div className="mt-16 flex flex-col gap-10">
        {Array.from(uniqueProjects).map((project, index) => (
          <ProjectCard
            project={{ ...project, isLeftImage: index % 2 !== 0 }}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
