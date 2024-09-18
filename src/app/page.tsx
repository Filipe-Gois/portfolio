import WelcomeText from "@/Components/Sections/WelcomeText";
import WelcomeTopic from "@/Components/Sections/WelcomeTopic";

export default function Home() {
  return (
    <main className="h-screen w-full mt-14">
      <div className="dark:bg-darkScheme-primary bg-lightScheme-primary w-full flex justify-center pb-10">
        <div className="flex h-full w-[85vw] flex-col items-center">
          <WelcomeText />
        </div>
      </div>
      <div className="dark:bg-darkScheme-secondary bg-lightScheme-secondary w-full flex justify-center">
        <div className="flex h-full w-[85vw] flex-col items-center ">
          <WelcomeTopic />
        </div>
      </div>
    </main>
  );
}
