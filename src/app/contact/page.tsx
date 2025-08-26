"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";
import { HiEnvelope, HiHome, HiPhone } from "react-icons/hi2";

const Page = () => {
  const { theme } = useTheme();

  return (
    <main className=" flex min-h-screen flex-col items-center justify-center  max-md:max-w-screen p-20 h-full  w-full">
      <div className=" flex  flex-row items-start gap-6 justify-between py-20">
        <div className=" flex flex-col justify-center items-center mt-12 gap-8  max-w-[640px]">
          <h2 className="text-2xl font-semibold text-foreground">
            Say Hello! 🙋‍♂️
          </h2>
          <h1 className="text-6xl pl-10 font-bold text-foreground">
            {"Let's Work Together."}
          </h1>
          <p className="px-4 text-center xl:text-start text-lg text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            adipisci laborum molestias sit .
          </p>
        </div>
        <div className="hidden  xl:flex xl:w-full justify-end items-center xl:h-full ">
          <Image
            src={
              theme === "dark"
                ? "/contact/illustration-dark.svg"
                : "/contact/illustration-light.svg"
            }
            alt=""
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="xl:w-[1400px] max-md:max-w-[550px]  flex flex-col-reverse xl:flex-row justify-between px-20 items-center gap-12 xl:gap-6 mb-20 ">
        <div className="flex flex-col   itmes-center gap-y-3 xl:gap-y-8 justify-around">
          <div className=" flex flex-row gap-x-10 items-center">
            <HiEnvelope className="xl:w-12 xl:h-12 w-6 h-6  ml-2 text-primary dark:text-foreground" />
            <h2 className="text-sm xl:text-xl font-medium text-foreground">
              LAOUFI.MOHAMED.LAMINE@GMAIL.COM
            </h2>
          </div>

          <div className="flex flex-row gap-x-10 items-center">
            <HiHome className="xl:w-12 xl:h-12 w-6 h-6 ml-2 text-primary dark:text-foreground" />
            <h2 className="text-sm xl:text-xl font-medium text-foreground">
              Cite 300 logs, belle vue, Ain benian, Algiers, Algeria
            </h2>
          </div>

          <div className="flex flex-row gap-x-10 items-center">
            <HiPhone className="xl:w-12 xl:h-12 w-6 h-6  ml-2 text-primary dark:text-foreground" />
            <h2 className="text-sm xl:text-xl font-medium text-foreground">
              +213 676 21 77 01
            </h2>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default Page;
