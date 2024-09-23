import ImageComponent from "@/components/Image";
import ImageFilipe from "../../../../public/Images/Filipe.jpeg";
import Tag from "@/components/Tag";

const WelcomeTopic = () => {
  return (
    <section className="w-full h-full flex flex-col items-center">
      <Tag title="Sobre mim" />

      <div className="mt-16 w-full flex flex-col md:flex-row justify-between items-center h-full">
        <div className="h-full w-4/5 md:w-full lg:w-2/5 xl:w-2/5 2xl:w-2/6">
          <ImageComponent
            isFloat
            className="p-[6px] border-lightScheme-tertiary border-x-8 border-b-8 border-opacity-45 md:border-l-[26px] md:border-b-[26px] md:border-r-0"
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eius
            ipsa nisi beatae minima, ullam quas qui recusandae facere ducimus!
            Similique deleniti nihil error nostrum ipsum fugiat sit excepturi
            quasi?
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eius
            ipsa nisi beatae minima, ullam quas qui recusandae facere ducimus!
            Similique deleniti nihil error nostrum ipsum fugiat sit excepturi
            quasi?
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eius
            ipsa nisi beatae minima, ullam quas qui recusandae facere ducimus!
            Similique deleniti nihil error nostrum ipsum fugiat sit excepturi
            quasi?
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eius
            ipsa nisi beatae minima, ullam quas qui recusandae facere ducimus!
            Similique deleniti nihil error nostrum ipsum fugiat sit excepturi
            quasi?
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eius
            ipsa nisi beatae minima, ullam quas qui recusandae facere ducimus!
            Similique deleniti nihil error nostrum ipsum fugiat sit excepturi
            quasi?
          </p>
          <p className="paragraph">
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
