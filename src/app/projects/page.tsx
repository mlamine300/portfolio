"use client";
import { useState } from "react";
import ProjectHeader from "./ProjectHeader";
import { projects } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
const Page = () => {
  const FilteredCategories = [
    "all projects",
    ...new Set(projects.map((project) => project.category)),
  ];
  const [category, setCategory] = useState(FilteredCategories.at(0));
  const filteredProjects =
    category === "all projects"
      ? projects.filter(() => true)
      : projects.filter((p) => p.category === category);
  console.log(category);
  console.log(filteredProjects.at(0)?.category);
  console.log(filteredProjects);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-16">
      <ProjectHeader />

      <Tabs
        defaultValue="all projects"
        className="w-full h-full flex flex-col items-center"
      >
        <TabsList className="max-sm:border-none max-sm:bg-background min-w-60 font-medium  text-xs sm:text-lg flex flex-col sm:flex-row sm:gap-20 sm:w-fit rounded-lg py-4 px-4 sm:px-20">
          {FilteredCategories.map((cat, index) => (
            <TabsTrigger
              className=" sm:p-4 capitalize  px-4"
              value={cat}
              key={index}
              onClick={() => setCategory(cat)}
            >
              {cat}{" "}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full h-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <TabsContent key={index} value={category || "all projects"}>
              <ProjectCard key={index} project={project} />
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

export default Page;
