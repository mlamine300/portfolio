"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import { getAllProjects } from "@/actions";

function Work() {
  const { theme } = useTheme();
  const [projects, setProjects] = useState<Project[] | null>(null);
  useEffect(() => {
    const x = async () => {
      const res = await getAllProjects();
      if (res && res.length > 0) setProjects(res);
    };
    x();
  }, []);

  return (
    <section className="container mx-auto flex flex-col md:flex-row gap-8  items-center mt-4 sm:mt-2 mb-10">
      <div className="flex flex-col items-center justify-center text-center xl:mb-10 mb-2  md:min-w-[300px] w-full">
        <div className="flex sm:gap-8 gap-2 justify-center items-center  ">
          <Image
            alt="ring"
            src={theme === "dark" ? "/ring-dark.svg" : "/ring.svg"}
            width={40}
            height={40}
            className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-text">
            Latest Projects
          </h1>
        </div>
        <p className="text-center text-text-secondary sm:text-lg text-sm mt-4 max-w-2xl">
          Here are some of my recent projects that showcase my skills in web and
          app development, ranging from interactive websites to fully-featured
          applications.
        </p>
        <Link className="xl:mt-4 mt-2" href="/projects">
          <Button>All Projects</Button>
        </Link>
      </div>
      <div className=" w-full max-md:max-w-screen max-w-[900px] ">
        <Swiper
          className="max-md:max-w-[600px] max-sm:max-w-[400px] xl:max-w-[1000px] xl:absolute right-0 top-0 xl:mt-10"
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
        >
          {projects &&
            projects.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
export default Work;
