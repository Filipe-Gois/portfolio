import ImageComponent from "@/components/Image";
import ImageFilipe from "../../../../public/Images/Filipe.jpeg";
import Tag from "@/components/Tag";

const WelcomeTopic = () => {
  return (
    <section id="about-me" className="w-full h-full flex flex-col items-center">
      <Tag title="Sobre mim" />

      <div className="mt-16 w-full flex flex-col md:flex-row justify-between items-center h-full">
        <div className="h-full w-4/5 md:w-full lg:w-2/5 xl:w-2/5 2xl:w-2/6 flex items-center justify-center">
          <ImageComponent
            isFloat
            src={ImageFilipe}
            alt={"Imagem de Filipe Góis, dono do portfólio."}
            width={150}
            height={250}
          />
        </div>

        <div className="mt-4 flex md:items-end flex-col gap-6 md:max-w-[50%] w-full md:mt-0">
          <h2 className="dark:text-lightScheme-primary text-darkScheme-primary text-2xl lg:text-4xl">
            Quer saber mais sobre mim ?
          </h2>
          <p className="paragraph">
            E aí, tudo bem? Sou Filipe Góis, tenho 17 anos e minha jornada no
            mundo da programação começou quando entrei no curso
            <strong> técnico em Desenvolvimento de Sistemas</strong> no SENAI
            aos 16. Foi uma experiência que abriu meus olhos para o universo da
            tecnologia, e desde então, venho me dedicando a melhorar minhas
            habilidades. Atualmente, estou migrando para Flutter. Além da
            programação, sou apaixonado por
            <strong> esportes! </strong>
            Adoro jogar basquete, vôlei e faço musculação regularmente. Essas
            atividades me ajudam a manter o foco e a disciplina, tanto nos meus
            estudos quanto na vida pessoal. Acredito que o equilíbrio entre
            corpo e mente é essencial para alcançar grandes resultados. Pretendo
            cursar <strong> Engenharia de Software </strong> como graduação e
            tenho o sonho de <strong> trabalhar fora do Brasil</strong>,
            explorando novas culturas e oportunidades na área de tecnologia.
            Cada projeto que faço me aproxima mais dos meus objetivos, e estou
            sempre em busca de aprender algo novo e evoluir profissionalmente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeTopic;
