"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NotFound = () => {
  const router = useRouter();
  const homePageURl = `/`;

  const goToHome = () => {
    router.replace(homePageURl);
  };

  const imageSize = window.innerWidth < 768 ? 250 : 500;

  return (
    <main className="w-screen h-screen">
      <section className="bg-blueGradient w-full h-full flex flex-col items-center justify-evenly">
        <h1 className="text-complementary-white font-bold text-4xl">
          Página não encontrada
        </h1>

        <button
          onClick={goToHome}
          className="text-red-950 p-2 border border-complementary-white rounded bg-white transition-all ease-in-out duration-300 hover:scale-110"
        >
          Voltar
        </button>

        <Image
          width={imageSize}
          height={imageSize}
          src={""}
          alt="Imagem de página não encontrada."
        />
      </section>
    </main>
  );
};

export default NotFound;
