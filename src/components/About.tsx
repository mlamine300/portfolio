"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  HiUser,
  HiEnvelope,
  HiAcademicCap,
  HiPhone,
  HiCalendar,
  HiHome,
} from "react-icons/hi2";
import { VscVscodeInsiders } from "react-icons/vsc";
import { BiLogoFigma } from "react-icons/bi";
import { RxNotionLogo } from "react-icons/rx";
import { SiAdobexd } from "react-icons/si";
import PersonalInfo from "./PersonalInfo";
import Qualifications from "./Qualifications";
import { Experience } from "./ExperienceCard";
import Skills from "./Skills";

const About = () => {
  const { theme } = useTheme();

  const infos: { icon: ReactNode; text: string; onClick: () => void }[] = [
    { icon: <HiUser />, text: "Laoufi Mohamed Lamine", onClick: () => {} },
    {
      icon: <HiEnvelope />,
      text: "laoufi.lamine.dev@gmail.com",
      onClick: () => {},
    },
    {
      icon: <HiAcademicCap />,
      text: "Master's Degree in Computer Science",
      onClick: () => {},
    },

    {
      icon: <HiPhone />,
      text: "+213 676 21 77 01",
      onClick: () => {},
    },
    {
      icon: <HiCalendar />,
      text: "Born on 01/01/1998",
      onClick: () => {},
    },
    {
      icon: <HiHome />,
      text: "Cite bellevue Ain benian, Algeirs Algeria",
      onClick: () => {},
    },
  ];
  const language = ["Arabic", "French", "English"];

  const Experiences: Experience[] = [
    {
      description: "Junior Software Engineer",
      dateFrom: "2023",
      dateTo: "2025",
      company: "UPS Algeria (United Parcel Service)",
    },
    {
      description: "Customer Solution Engineer",
      dateFrom: "2022",
      dateTo: "2023",
      company: "UPS Algeria (United Parcel Service)",
    },
  ];
  const Educations: Experience[] = [
    {
      description: "Master's Degree in Computer Science",
      dateFrom: "2021",
      dateTo: "2019",
      company: "Ecole Superieure Nationale de Technologie (ESNT)",
    },
    {
      description: "Bachelor's Degree in Computer Science",
      dateFrom: "2019",
      dateTo: "2016",
      company: "Ecole Superieure Nationale de Technologie (ESNT)",
    },
  ];

  const skills = [
    "HTML, CSS",
    "JavaScript, TypeScript",
    "React, Next.js",
    "PostgreSQL, MongoDB",
  ];
  const tools = [
    <VscVscodeInsiders key={1} />,
    <BiLogoFigma key={2} />,
    <RxNotionLogo key={3} />,
    <SiAdobexd key={4} />,
  ];
  return (
    <section className="flex flex-col self-center sm:w-[700px] mt-26 sm:max-w-[700px]  sm:h-[900px] items-center gap-4 py-8">
      <div className="flex gap-8 justify-center items-center ">
        <Image
          alt="ring"
          src={theme === "dark" ? "/ring-dark.svg" : "/ring.svg"}
          width={40}
          height={40}
        />
        <h1 className="text-5xl font-bold text-text">About</h1>
      </div>
      <Tabs defaultValue="info" className="w-full h-full ">
        <TabsList className="py-4 sm:py-1 flex flex-col  sm:flex-row sm:justify-arround w-full bg-background lg:bg-white dark:bg-muted  rounded-lg px-1">
          <TabsTrigger order={-1} className="w-72" value="info">
            Personal informations
          </TabsTrigger>
          <TabsTrigger order={2} className="w-72" value="qualifications">
            Qualifications
          </TabsTrigger>
          <TabsTrigger order={4} className="w-72" value="skills">
            Skills
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="h-full ">
          <PersonalInfo infos={infos} language={language} />
        </TabsContent>
        <TabsContent value="qualifications" className="h-full ">
          <Qualifications experiences={Experiences} education={Educations} />
        </TabsContent>
        <TabsContent value="skills" className="h-full">
          <Skills skills={skills} tools={tools} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default About;
