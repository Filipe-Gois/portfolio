import { ProjectType, SkillName } from "@/Types";
import ImageComponent from "../Image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Github } from "lucide-react";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const uniqueSkills = new Set<SkillName>(project.skills);

  return (
    <div
      className={`w-full h-full dark:bg-darkScheme-tertiary bg-opacity-30 rounded-xl shadow-custom md:flex md:${
        project.isLeftImage && "flex-row-reverse"
      } xl:!min-h-[385px]`}
    >
      <div className="dark:bg-lightScheme-tertiary bg-darkScheme-tertiary !bg-opacity-10 dark:!bg-opacity-30  rounded-t-xl p-5 md:w-1/2 md:flex md:!items-center md:justify-center">
        <ImageComponent
          alt={project.image.alt}
          className={`rounded-3xl border-y-8 border-none md:max-h-[100%] md:max-w-[100%] lg:max-w-[80%] xl:max-w-[60%] 2xl:max-w-[50%]`}
          src={project.image.src}
          layout="responsive"
        />
      </div>
      <div className="p-5 md:w-1/2">
        <p className="first-letter:uppercase text-2xl lg:text-4xl">
          {project.title}
        </p>
        <p className="paragraph mt-4">{project.description}</p>

        <div className="mt-6 flex gap-2 flex-wrap">
          {Array.from(uniqueSkills).map((skill, index) => (
            <span
              className="px-2 py-1 bg-complementary-gray/50 dark:bg-lightScheme-tertiary/50 rounded-full"
              key={index}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-6">
          {project.urlDeploy && (
            <a
              className="hover:text-complementary-lightGreen transition-all ease-in-out duration-500 cursor-pointer hover:scale-125"
              href={project.urlDeploy}
              target="_blank"
            >
              <FaExternalLinkAlt className="size-5" size={18} />
            </a>
          )}

          <a
            className="hover:text-complementary-lightGreen transition-all ease-in-out duration-500 cursor-pointer hover:scale-125"
            href={project.urlRepository}
            target="_blank"
          >
            <Github className="size-6" size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
