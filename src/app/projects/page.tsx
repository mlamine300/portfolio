// "use client";
// import { useState } from "react";
import ProjectHeader from "./ProjectHeader";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

import { Project } from "@/types";
import { getAllProjects } from "@/actions";
import CategoriesHeader from "./CategoriesHeader";
import Loading from "@/components/loading";

type SearchParams = { [key: string]: string | string[] | undefined };
const Page = async ({
  // params,
  searchParams,
}: {
  // params: Params;
  searchParams: Promise<SearchParams>;
}) => {
  const projects = (await getAllProjects()) || [];
  const category = (await searchParams).category as string;
  const FilteredCategories = [
    "all projects",
    ...new Set(projects.map((project: Project) => project.category)),
  ];

  const filteredProjects =
    !category || category === "" || category === "all projects"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === category);

  console.log(category);
  // console.log(filteredProjects.at(0));
  console.log(filteredProjects);
  // if (filteredProjects.length < 1) return "hola";
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-16">
      <ProjectHeader />

      <Tabs
        defaultValue="all projects"
        className="w-full h-full flex flex-col items-center"
      >
        <CategoriesHeader categories={FilteredCategories} />
        <div className="w-full h-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <TabsContent key={index} value={category || "all projects"}>
                <ProjectCard key={index} project={project} />
              </TabsContent>
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-red-500">
              <Loading />
            </div>
          )}
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

export default Page;
