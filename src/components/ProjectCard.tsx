import React from "react";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { GithubIcon, Link2Icon } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="h-fit group overflow-hidden relative max-md:max-h-[400px]">
      <div className="absolute opacity-0 z-10 w-full h-20 top-[30%] left-1  flex justify-center items-center gap-2 group-hover:opacity-100 transition-opacity duration-500 ">
        <Link href={project.github}>
          {" "}
          <GithubIcon className="dark:bg-primary/80 dark:text-secondary dark:hover:text-white  bg-black/90  px-4 rounded-full text-white w-16 h-16 hover:text-primary" />
        </Link>
        <Link href={project.link}>
          {" "}
          <Link2Icon className="dark:bg-primary/80 dark:text-secondary dark:hover:text-white  bg-black/90 px-4 rounded-full text-white  w-16 h-16 hover:text-primary" />
        </Link>
      </div>
      <CardHeader>
        <div
          className=" relative w-full h-[200px] xl:h-[300px] flex justify-center items-center 
        bg-tertiary dark:bg-secondary/10 xl:bg-work_project_image xl:dark:bg-work_project_image-dark  xl:bg-[110%] overflow-hidden xl:bg-no-repeat"
        >
          <Image
            src={project.image}
            alt=""
            width={300}
            height={350}
            className="absolute bottom-0 shadow-2xl"
            priority
          />
        </div>
      </CardHeader>
      <div className="p-6 w-full">
        <Badge className="uppercase text-sm xl:text-lg font-medium top-4 left-4 px-2 absolute">
          {project.category}{" "}
        </Badge>
        <h4>{project.name} </h4>
        <p className="text-muted-foreground xl:text-lg text-sm">
          {project.description}{" "}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
