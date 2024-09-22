import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import WelcomeText from "@/components/Sections/WelcomeText";
import WelcomeTopic from "@/components/Sections/WelcomeTopic";

export default function Home() {
  return (
    <main className="h-full w-full mt-14">
      <div className="dark:bg-darkScheme-primary bg-lightScheme-secondary w-full flex justify-center py-10">
        <div className="flex h-full w-[85vw] flex-col items-center">
          <WelcomeText />
        </div>
      </div>
      <div className="dark:bg-darkScheme-secondary bg-lightScheme-tertiary w-full flex justify-center py-10">
        <div className="flex h-full w-[85vw] flex-col items-center ">
          <WelcomeTopic />
        </div>
      </div>
      <div className="dark:bg-darkScheme-primary bg-lightScheme-secondary w-full flex justify-center py-10">
        <div className="flex h-full w-[85vw] flex-col items-center ">
          <Skills />
        </div>
      </div>
      <div className="dark:bg-darkScheme-secondary bg-lightScheme-tertiary w-full flex justify-center py-10">
        <div className="flex h-full w-[85vw] flex-col items-center ">
          <Projects />
        </div>
      </div>
    </main>
  );
}
