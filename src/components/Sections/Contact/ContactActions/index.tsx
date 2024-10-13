import { Phone, Mail } from "lucide-react";
import { Github } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const businessData = {
  email: `filipeogois@gmail.com`,
  phoneNumber: `+5511911550185`,
  githubUri: `https://github.com/Filipe-Gois/`,
  linkedinUri: `https://www.linkedin.com/in/filipe-góis/`,
};

const animation = {
  initial: { opacity: 0, y: -100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

export const ContactActions = () => {
  return (
    <div className="w-full mt-8 gap-2 flex flex-col items-center">
      <motion.a
        {...animation}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.25,
          transition: { duration: 0.2, ease: "easeOut" }, // Animação mais rápida na saída
        }}
        href={`mailto:${businessData.email}`}
        target="_blank"
        className="flex items-center gap-2 w-max justify-center hover:text-complementary-lightGreen"
      >
        <Mail size={25} />
        <span>{businessData.email}</span>
      </motion.a>
      <motion.a
        {...animation}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.25,
          transition: { duration: 0.2, ease: "easeOut" }, // Animação mais rápida na saída
        }}
        className="flex items-center gap-2 w-max justify-center hover:text-complementary-lightGreen"
        href={`https://wa.me/${businessData.phoneNumber}`}
        target="_blank"
      >
        <Phone size={25} />
        <span>{businessData.phoneNumber}</span>
      </motion.a>
    </div>
  );
};

export const SocialMediasContact = ({ descricao }: { descricao: string }) => {
  const iconSize = {
    class: "size-7",
    size: 18,
  };
  return (
    <div className="mt-8 flex flex-col gap-2">
      <motion.span
        transition={{ duration: 0.3 }}
        {...animation}
        className="text-center"
      >
        {descricao}
      </motion.span>
      <div className="flex justify-center w-full h-max gap-2">
        <motion.a
          {...animation}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.2, ease: "easeOut" }, // Animação mais rápida na saída
          }}
          href={businessData.githubUri}
          target="_blank"
        >
          <Github
            className={`${iconSize.class} hover:text-complementary-lightGreen`}
            size={iconSize.size}
          />
        </motion.a>
        <motion.a
          {...animation}
          whileHover={{
            scale: 1.25,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          className="hover:text-complementary-lightGreen"
          href={businessData.linkedinUri}
          target="_blank"
        >
          <FaLinkedin className={iconSize.class} size={iconSize.size} />
        </motion.a>
      </div>
    </div>
  );
};
