import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  uriVideoProject: string;
};

export const ModalVideoProjects = ({
  isOpen,
  setIsOpen,
  uriVideoProject,
}: ModalProps) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="w-[85%] md:max-w-xl lg:max-w-4xl xl:max-w-7xl p-10 bg-lightScheme-primary dark:bg-darkScheme-primary border-lightScheme-primary">
        <VisuallyHidden>
          <DialogTitle>Video Project</DialogTitle>
        </VisuallyHidden>
        <DialogDescription></DialogDescription>
        <video
          className="w-full rounded-2xl outline-none"
          controls
          src={uriVideoProject}
        ></video>
      </DialogContent>
    </Dialog>
  );
};
