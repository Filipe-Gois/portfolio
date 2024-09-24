"use client";
import { ProjectType, SkillName } from "@/Types";
import ImageComponent from "../Image";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { Github } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const ProjectCard = ({
  project,
  setUrlVideoSelected,
  setIsOpenModal,
}: {
  project: ProjectType;
  setUrlVideoSelected: Dispatch<SetStateAction<string>>;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const uniqueSkills = new Set<SkillName>(project.skills);

  const showVideoApplication = () => {
    setUrlVideoSelected(project.urlVideoApplication);
    setIsOpenModal(true);
  };

  return (
    <div
      className={`w-full h-full dark:bg-darkScheme-tertiary bg-opacity-30 rounded-xl shadow-custom md:flex md:${
        project.isLeftImage && "flex-row-reverse"
      } xl:!min-h-[385px]`}
    >
      <div className="group dark:bg-lightScheme-tertiary bg-darkScheme-tertiary !bg-opacity-10 dark:!bg-opacity-30  rounded-t-xl p-5 md:w-1/2 flex !items-center justify-center relative">
        <button
          className="w-full h-max flex justify-center items-center"
          onClick={showVideoApplication}
        >
          <ImageComponent
            alt={project.image.alt}
            className={`rounded-3xl border-y-8 border-none w-full max-h-[200px] md:max-w-[400px] md:max-h-[200px] lg:max-w-[400px] lg:max-h-[250px] transition-all ease-in-out duration-500 hover:scale-125 cursor-pointer hover:opacity-50`}
            src={project.image.src}
          />
        </button>
        <span className="transition-all ease-in-out duration-500 cursor-pointer absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 hover:scale-125">
          <FaEye className="size-5 text-complementary-lightGreen" size={18} />
        </span>
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
          {project.urlDeploy ? (
            <a
              className="hover:text-complementary-lightGreen transition-all ease-in-out duration-500 cursor-pointer hover:scale-125"
              href={project.urlDeploy}
              target="_blank"
            >
              <FaExternalLinkAlt className="size-5" size={18} />
            </a>
          ) : (
            <button
              onClick={showVideoApplication}
              className="hover:text-complementary-lightGreen transition-all ease-in-out duration-500 cursor-pointer hover:scale-125"
            >
              <FaEye className="size-5" size={18} />
            </button>
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
