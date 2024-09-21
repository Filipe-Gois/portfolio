import ImageComponent from "@/components/Image";
import ImageFilipe from "../../../../public/Images/Filipe.jpeg";
import Tag from "@/components/Tag";

const WelcomeTopic = () => {
  return (
    <section className="w-full h-full flex flex-col items-center">
      <Tag title="Sobre mim" />

      <div className="mt-8 w-4/5">
        <div className="">
          <ImageComponent
            className="p-[6px] border-lightScheme-tertiary border-x-8 border-b-8 border-opacity-45 md:border-l-[26px] md:border-b-[26px] md:border-r-0"
            src={ImageFilipe}
            layout="responsive"
            alt={"Imagem de Filipe Góis, dono do portfólio."}
            width={150}
            height={250}
          />
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <h1>Curioso sobre mim ?</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eius
            ipsa nisi beatae minima, ullam quas qui recusandae facere ducimus!
            Similique deleniti nihil error nostrum ipsum fugiat sit excepturi
            quasi?
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eius
            ipsa nisi beatae minima, ullam quas qui recusandae facere ducimus!
            Similique deleniti nihil error nostrum ipsum fugiat sit excepturi
            quasi?
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eius
            ipsa nisi beatae minima, ullam quas qui recusandae facere ducimus!
            Similique deleniti nihil error nostrum ipsum fugiat sit excepturi
            quasi?
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeTopic;
