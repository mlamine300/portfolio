"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

function Work() {
  const { theme } = useTheme();
  // Sample projects data

  return (
    <section className="container mx-auto flex flex-col md:flex-row gap-8  items-center mt-4 sm:mt-2 mb-10">
      <div className="flex flex-col items-center justify-center text-center sm:mb-10 mb-5  md:min-w-[300px] w-full">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quisquam explicabo beatae veniam velit accusantium
        </p>
        <Link className="mt-4" href="/projects">
          <Button>All Projects*</Button>
        </Link>
      </div>
      <div className=" max-w-[900px] ">
        <Swiper
          className="max-md:max-w-[600px] max-sm:max-w-[400px] xl:max-w-[1000px] xl:absolute right-0 top-0 mt-10"
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
          {projects.slice(0, 4).map((project, index) => (
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
