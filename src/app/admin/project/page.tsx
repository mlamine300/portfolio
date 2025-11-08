"use client";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axiosInstance from "@/lib/axiosInstance";
import { Project } from "@/types";
import { PenLine, Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AdminProjectManagePage = () => {
  const [projectsCategory, setProjectsCategory] = useState<string | null>(null);
  const [allProjects, setallProjects] = useState<Project[] | null>(null);
  //   const [filtteredProjects, setfiltteredProjects] = useState<Project[] | null>(
  //     null
  //   );
  const categories: string[] = [
    "All projects",
    ...Array.from(new Set(allProjects?.map((p: Project) => p.category) ?? [])),
  ];

  const filtteredProjects =
    allProjects?.filter(
      (p) => projectsCategory === null || projectsCategory === p.category
    ) || [];
  useEffect(() => {
    const getAllProjects = async () => {
      const res = await axiosInstance.get("/project");
      setallProjects(res.data.projects);
      console.log(res);
    };
    getAllProjects();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-16 relative">
      {/* <ProjectHeader /> */}
      <Link
        className="fixed z-10 bottom-20 right-10 md:bottom-10 md:left-[90%] w-10 h-10 md:w-16 md:h-16 2xl:w-24 2xl:h-24 flex items-center justify-center  rounded-full bg-primary/60  hover:bg-primary"
        href={"/admin/project/new"}
      >
        <Plus color="white" size={50} />
      </Link>
      <Tabs
        defaultValue="all projects"
        className="w-full h-full flex flex-col items-center"
      >
        <TabsList className="max-sm:border-none max-sm:bg-background min-w-60 font-medium  text-xs sm:text-lg flex flex-col sm:flex-row sm:gap-20 sm:w-fit rounded-lg py-4 px-4 sm:px-20">
          {categories.map((cat, index) => (
            <TabsTrigger
              className=" sm:p-4 capitalize  px-4"
              value={cat}
              key={index}
              onClick={() => setProjectsCategory(cat)}
            >
              {cat}{" "}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full h-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtteredProjects.map((project, index) => (
            <TabsContent key={index} value={projectsCategory || "all projects"}>
              <div className="relative">
                <Link
                  className="absolute z-10 top-4 left-[85%] rounded-full bg-gray-900/40 p-2 hover:p-3 hover:bg-gray-900/60"
                  href={`/admin/project/${project._id}`}
                >
                  <PenLine color="white" />{" "}
                </Link>
                <ProjectCard key={index} project={project} />
              </div>
            </TabsContent>
          ))}
        </div>
        {/* <div className="w-full h-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <TabsContent key={index} value={project.category}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div> */}
      </Tabs>
    </main>
  );
};

export default AdminProjectManagePage;
