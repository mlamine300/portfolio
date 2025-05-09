"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import PersonalInfo from "./PersonalInfo";

const About = () => {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col self-center w-[700px] mt-26 max-w-[700px]  h-[900px] items-center gap-4 py-8">
      <div className="flex gap-8 justify-center items-center">
        <Image
          alt="ring"
          src={theme === "dark" ? "/ring-dark.svg" : "/ring.svg"}
          width={40}
          height={40}
        />
        <h1 className="text-5xl font-bold text-text">About</h1>
      </div>
      <Tabs defaultValue="info" className="w-full h-full">
        <TabsList className="flex flex-col sm:flex-row sm:justify-arround w-full bg-white dark:bg-muted  rounded-lg p-1">
          <TabsTrigger order={-1} className="-order-1" value="info">
            Personal informations
          </TabsTrigger>
          <TabsTrigger order={2} className="order-2" value="qualifications">
            Qualifications
          </TabsTrigger>
          <TabsTrigger order={4} className="order-4" value="skills">
            Skills
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="h-full ">
          <PersonalInfo />
        </TabsContent>
        <TabsContent
          value="qualifications"
          className="h-full bg-blue-500"
        ></TabsContent>
        <TabsContent
          value="skills"
          className="h-full bg-green-500"
        ></TabsContent>
      </Tabs>
    </section>
  );
};

export default About;
