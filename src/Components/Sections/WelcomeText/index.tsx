import ImageFilipe from "../../../../public/Images/Filipe.jpeg";
import { MapPin, Linkedin, Github } from "lucide-react";
import "./style.css";
import CvButtonDownloader from "@/components/CvButtonDownloader";
import ImageComponent from "@/components/Image";

const WelcomeText = () => {
  return (
    <section className="w-full h-max flex flex-col items-center">
      <ImageComponent
        className="primary-image p-[6px] border-lightScheme-tertiary border-x-8 border-b-8 border-opacity-45 relative before:absolute after:h-[80%] before:h-[80%] after:absolut  "
        src={ImageFilipe}
        // layout="responsive"
        alt={"Imagem de Filipe Góis, dono do portfólio."}
        width={150}
        height={250}
      />

      <div className="flex w-full mt-8 flex-col gap-1">
        <h1 className="dark:text-lightScheme-primary text-darkScheme-primary">
          Olá, meu nome é Filipe ✌️
        </h1>

        <p className="dark:text-lightScheme-primary text-darkScheme-primary text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At suscipit
          aliquid totam deleniti quae aliquam, expedita quibusdam labore sed
          provident eius rem voluptatum voluptatem a ex impedit voluptatibus
          possimus pariatur!
        </p>

        <CvButtonDownloader />

        <div className="mt-8 flex flex-col gap-2">
          <label className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-1">
            <MapPin />
            São Paulo, Brasil.
          </label>
          <label className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-1 items-center">
            <span className="w-1 h-1 bg-complementary-darkGreen rounded" />
            Disponível para projetos.
          </label>
        </div>

        <div className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-2 mt-4">
          <a
            className="hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
            href="https://github.com/Filipe-Gois/"
            target="_blank"
          >
            <Github />
          </a>
          <a
            className="hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
            href="https://www.linkedin.com/in/filipe-góis-841b58206/"
            target="_blank"
          >
            <Linkedin />
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
