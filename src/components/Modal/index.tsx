import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ProjectType } from "@/Types";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedProject: ProjectType | null;
};

export const ModalVideoProjects = ({
  isOpen,
  setIsOpen,
  selectedProject,
}: ModalProps) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="w-[85%] lg:max-w-xl lg:max-w-4xl xl:max-w-7xl p-10 bg-lightScheme-primary dark:bg-darkScheme-primary border-lightScheme-primary">
        <DialogTitle className="text-center">
          {selectedProject ? selectedProject.title : ""}
        </DialogTitle>
        <VisuallyHidden>
          <DialogDescription></DialogDescription>
        </VisuallyHidden>
        {selectedProject && selectedProject.urlVideoApplication ? (
          <video
            autoPlay
            muted
            className="w-full max-h-[70vh] rounded-2xl outline-none"
            controls
          >
            <source
              src={selectedProject ? selectedProject.urlVideoApplication : ""}
              type="video/mp4"
            ></source>
          </video>
        ) : (
          <p className="!text-center !max-w-full paragraph">
            Vídeo indisponível. Confira o deploy de{" "}
            <a
              className="text-complementary-lightGreen italic underline"
              href={selectedProject?.urlDeploy}
              target="_blank"
            >
              {selectedProject?.title}
            </a>
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};
