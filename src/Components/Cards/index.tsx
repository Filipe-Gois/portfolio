"use client";
import { offeredService, ProjectType, SkillName } from "@/Types";
import ImageComponent from "../Image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Github } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import ServiceIcon from "../ServiceIcon";
import { MdOutlineOndemandVideo } from "react-icons/md";

const ProjectCard = ({
  project,
  setSelectedProject,
  setIsOpenModal,
}: {
  project: ProjectType;
  setSelectedProject: Dispatch<SetStateAction<ProjectType | null>>;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const uniqueSkills = new Set<SkillName>(project.skills);

  const showVideoApplication = () => {
    setSelectedProject(project);
    setIsOpenModal(true);
  };

  return (
    <div
      className={`w-full h-full dark:bg-darkScheme-tertiary bg-opacity-30 rounded-xl shadow-custom lg:flex lg:${
        project.isLeftImage && "flex-row-reverse"
      } xl:!min-h-[385px]`}
    >
      {/* Image Section */}
      <div className="relative dark:bg-lightScheme-tertiary bg-darkScheme-tertiary !bg-opacity-10 dark:!bg-opacity-30  rounded-t-xl p-5 lg:w-1/2 flex !items-center justify-center ">
        <button
          className="w-full h-max flex justify-center items-center relative"
          onClick={showVideoApplication}
        >
          {/* Image with hover effect */}
          <div className="lg:hover:scale-125 group relative transition-all ease-in-out duration-500 w-full max-h-[200px] lg:max-w-[400px] lg:max-h-[200px] ">
            <ImageComponent
              alt={project.image.alt}
              className={`rounded-xl border-none w-full max-h-[200px] transition-transform ease-in-out duration-500`}
              src={project.image.src}
            />
            {/* Darker overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all ease-in-out duration-500 rounded-xl"></div>
            {/* Eye icon */}
            <span className="transition-opacity ease-in-out duration-500 cursor-pointer absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
              <MdOutlineOndemandVideo
                className="size-5 text-complementary-white"
                size={30}
              />
            </span>
          </div>
        </button>
      </div>

      {/* Project Details Section */}
      <div className="p-5 lg:p-16 lg:w-1/2">
        <p className="first-letter:uppercase text-2xl lg:text-4xl">
          {project.title}
        </p>
        <p className="paragraph lg:!max-w-full mt-4">{project.description}</p>

        {/* Skills */}
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

        {/* Links */}
        <div className="flex items-center gap-3 mt-6">
          {project.urlDeploy ? (
            <a
              className="hover:text-complementary-lightGreen transition-all ease-in-out duration-500 cursor-pointer hover:scale-125"
              href={project.urlDeploy}
              target="_blank"
            >
              <FaExternalLinkAlt
                className="size-5 text-complementary-lightGreen"
                size={18}
              />
            </a>
          ) : (
            <button
              onClick={showVideoApplication}
              className="hover:text-complementary-lightGreen transition-all ease-in-out duration-500 cursor-pointer hover:scale-125"
            >
              <MdOutlineOndemandVideo
                className="size-6 text-complementary-lightGreen"
                size={18}
              />
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

export const ServiceCard = ({ service }: { service: offeredService }) => {
  return (
    <div className="w-11/12 lg:w-4/5 h-[300px] lg:h-[400px] xl:h-[300px] bg-white dark:bg-complementary-blackv2 rounded-xl p-5 flex flex-col items-center justify-around text-xl transition-all ease-in-out duration-300 lg:hover:scale-110 !cursor-pointer shadow-custom">
      <ServiceIcon icon={service.title} />
      <p className="justify-center text-center text-complementary-lightGreen">
        {service.title}
      </p>

      <p className="paragraph !text-center">{service.description}</p>
    </div>
  );
};

export default ProjectCard;
