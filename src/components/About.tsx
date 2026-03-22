"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { ReactNode} from "react";
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
import { BiLogoAdobe, BiLogoFigma } from "react-icons/bi";
import { RxNotionLogo } from "react-icons/rx";
import PersonalInfo from "./PersonalInfo";
import Qualifications from "./Qualifications";
import { Experience } from "./ExperienceCard";
import Skills from "./Skills";
type AboutProps={
  experiences:Experience[];
  educations:Experience[];
  summary:string;
  phone:string;
  email:string;
  dateOfBirth : string;
  education : string;
  address : string;
  name :string;
  skills:string[];
}
const About = ({experiences,educations,summary,phone,email,dateOfBirth,education,address,name,skills

}:AboutProps) => {
  const { theme } = useTheme();

  const infos: { icon: ReactNode; text: string; onClick: () => void }[] = [
    { icon: <HiUser />, text: name||"Laoufi Mohamed Lamine", onClick: () => {} },
    {
      icon: <HiEnvelope />,
      text: email||"laoufi.lamine.dev@gmail.com",
      onClick: () => {},
    },
    {
      icon: <HiAcademicCap />,
      text: education||"Master's Degree in Computer Science",
      onClick: () => {},
    },

    {
      icon: <HiPhone />,
      text: phone||"+213 676 21 77 01",
      onClick: () => {},
    },
    {
      icon: <HiCalendar />,
      text: dateOfBirth||"Born on 01/01/1998",
      onClick: () => {},
    },
    {
      icon: <HiHome />,
      text: address|| "Cite bellevue Ain benian, Algeirs Algeria",
      onClick: () => {},
    },
  ];
  const language = ["Arabic", "French", "English"];

  const Experiences: Experience[] =experiences||
   [
    {
      title: "Junior Software Engineer",
      start: "2023",
      end: "2025",
      company: "UPS Algeria (United Parcel Service)",
    },
    {
      title: "Customer Solution Engineer",
      start: "2022",
      end: "2023",
      company: "UPS Algeria (United Parcel Service)",
    },
  ];
  const Educations: Experience[] =educations|| [
    {
      title: "Master's Degree in Computer Science",
      start: "2021",
      end: "2019",
      company: "Ecole Superieure Nationale de Technologie (ESNT)",
    },
    {
      title: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2016",
      company: "Ecole Superieure Nationale de Technologie (ESNT)",
    },
  ];

  const mySkills =skills|| [
    "HTML, CSS",
    "JavaScript, TypeScript",
    "React, Next.js",
    "PostgreSQL, MongoDB",
  ];
  const tools = [
    <VscVscodeInsiders key={1} />,
    <BiLogoFigma key={2} />,
    <RxNotionLogo key={3} />,
    <BiLogoAdobe key={4} />,
  ];

  // const [updatedExperiences, setUpdatedExperiences] = useState<Experience[]>(Experiences);
  // const [updatedEducations, setUpdatedEducations] = useState<Experience[]>(Educations);

  // useEffect(()=>{

  // },[])
  return (
    <section className="flex flex-col self-center sm:w-175 mt-26 sm:max-w-175  items-center gap-4 py-8">
      <div className="flex sm:gap-8 gap-2 justify-center items-center ">
        <Image
          alt="ring"
          src={theme === "dark" ? "/ring-dark.svg" : "/ring.svg"}
          width={40}
          height={40}
          className='w-5 h-5 sm:w-10 sm:h-10'
        />
        <h1 className="text-2xl sm:text-5xl font-bold text-text">About</h1>
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
          <PersonalInfo summary={summary} title="" infos={infos} language={language} />
        </TabsContent>
        <TabsContent value="qualifications" className="h-full ">
          <Qualifications experiences={Experiences} education={Educations} />
        </TabsContent>
        <TabsContent value="skills" className="h-full">
          <Skills skills={mySkills} tools={tools} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default About;
