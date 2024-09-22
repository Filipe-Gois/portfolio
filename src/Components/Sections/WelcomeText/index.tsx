import ImageFilipe from "../../../../public/Images/Filipe.jpeg";
import { MapPin, Github } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import "./style.css";
import CvButtonDownloader from "@/components/CvButtonDownloader";
import ImageComponent from "@/components/Image";
import { TitleAnimated } from "@/components/Title";

const WelcomeText = () => {
  return (
    <section className="w-full h-max flex flex-col items-center md:flex-row-reverse">
      <div className="h-full w-4/5 lg:w-3/5 xl:w-2/5">
        <ImageComponent
          className="primary-image p-[6px] border-lightScheme-tertiary border-x-8 border-b-8 border-opacity-45 md:border-l-0 md:border-b-[26px] md:border-r-[26px]"
          src={ImageFilipe}
          layout="responsive"
          alt={"Imagem de Filipe Góis, dono do portfólio."}
          width={150}
          height={250}
        />
      </div>
      <div className="flex w-full flex-col gap-1 mt-8 md:mt-0">
        <TitleAnimated />

        <p className="paragraph mt-2">
          Sou um desenvolvedor Full-Stack com foco em{" "}
          <strong className="italic">mobile</strong>, sempre em busca de
          aprimorar cada detalhe do meu código. Minha paixão por tecnologia vai
          além das telas. Estou constantemente explorando novas linguagens e
          ferramentas, como o <strong className="italic">Dart e Flutter</strong>
          , tendo experiência também em
          <strong className="italic"> React Native</strong>. Acredito que o
          aprendizado contínuo é a chave para a excelência. Atualmente, estou
          treinando para{" "}
          <strong className="italic">competir na WorldSkills 2028</strong>, em
          Aichi, Japão, com o sonho de{" "}
          <strong className="italic">conquistar a medalha de ouro</strong> para
          o Brasil.
        </p>

        <CvButtonDownloader />

        <div className="mt-8 flex flex-col gap-2 w-max">
          <label className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-1 text-sm lg:text-base">
            <MapPin size={18} />
            São Paulo, Brasil.
          </label>
          <label className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-1 items-center text-sm lg:text-base">
            <span className="w-1 h-1 bg-complementary-darkGreen rounded ml-[0.375rem] " />
            Disponível para projetos.
          </label>
        </div>

        <div className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-2 mt-8 w-max">
          <a
            className="hover:text-complementary-lightGreen hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
            href="https://github.com/Filipe-Gois/"
            target="_blank"
          >
            <Github className="size-8" size={18} />
          </a>
          <a
            className="hover:text-complementary-lightGreen hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
            href="https://www.linkedin.com/in/filipe-góis-841b58206/"
            target="_blank"
          >
            <FaLinkedin className="size-8" size={18} />
          </a>
          <a
            className="hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
            href=""
            target="_blank"
          ></a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeText;
