"use client";
import Tag from "@/components/Tag";
import { Phone, Mail } from "lucide-react";
import { Github } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const businessData = {
    email: `filipeogois@gmail.com`,
    phoneNumber: `+5511911550185`,
    githubUri: `https://github.com/Filipe-Gois/`,
    linkedinUri: `https://www.linkedin.com/in/filipe-góis/`,
  };

  return (
    <section id="contact" className="w-full h-max flex flex-col items-center">
      <Tag title="Contate-me" />
      <h2 className="paragraph mt-8 !max-w-[50%] !text-center">
        O que vem a seguir? Sinta-se à vontade para entrar em contato comigo se
        estiver procurando um desenvolvedor ou tiver alguma dúvida.
      </h2>

      <div className="w-full mt-8 gap-2 flex flex-col items-center">
        <a
          href={`mailto:${businessData.email}`}
          target="_blank"
          className="flex items-center gap-2 w-max justify-center transition-all ease-in-out duration-500 hover:text-complementary-lightGreen hover:scale-110 cursor-pointer"
        >
          <Mail size={25} />
          <span>{businessData.email}</span>
        </a>
        <a
          className="flex items-center gap-2 w-max justify-center transition-all ease-in-out duration-500 hover:text-complementary-lightGreen hover:scale-110 cursor-pointer"
          href={`https://wa.me/${businessData.phoneNumber}`}
          target="_blank"
        >
          <Phone size={25} />
          <span>{businessData.phoneNumber}</span>
        </a>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <span>Você pode me encontrar nessas plataformas:</span>
        <div className="flex justify-center w-full h-max gap-2">
          <a
            className="hover:text-complementary-lightGreen hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
            href={businessData.githubUri}
            target="_blank"
          >
            <Github className="size-7" size={18} />
          </a>
          <a
            className="hover:text-complementary-lightGreen hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
            href={businessData.linkedinUri}
            target="_blank"
          >
            <FaLinkedin className="size-7" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
