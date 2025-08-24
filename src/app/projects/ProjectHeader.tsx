"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const ProjectHeader = () => {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col self-center sm:w-[700px]  sm:max-w-[700px]  items-center gap-4 py-8">
      <div className="flex sm:gap-8 gap-2 justify-center items-center ">
        <Image
          alt="ring"
          src={theme === "dark" ? "/ring-dark.svg" : "/ring.svg"}
          width={40}
          height={40}
          className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
        />
        <h1 className="text-2xl sm:text-5xl font-bold text-text">
          My Projects
        </h1>
      </div>
    </section>
  );
};

export default ProjectHeader;
