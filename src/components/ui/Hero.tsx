import React from "react";
import { Button } from "./button";

import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
const Hero = () => {
  return (
    <section className="mt-20 md:mt-5">
      <div>
        <div className="self-center flex flex-col items-start justify-center max-w-[500px]">
          <p className="text-lg uppercase text-primary tracking-widest">
            Web Developer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            {" Hello, My name is "} <span>Lamine</span>
          </h1>
          <p className="text-sm mt-2 text-muted-foreground">
            I am a Logistician and transportation engineer with a passion for
            creating beautiful and functional App and websites.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 ">
          <Button className="sm:gap-4 rounded-xl  max-sm:mx-auto w-36">
            <span className="text-[10px] sm:flex sm:text-sm">Contact me</span>{" "}
            <HiOutlinePaperAirplane />{" "}
          </Button>
          <Button
            variant={"outline"}
            className="sm:gap-4  rounded-xl
             active:text-primary max-sm:mx-auto w-36 active:border-primary "
          >
            {" "}
            <span className="text-[10px]  sm:text-sm">Download CV</span>{" "}
            <HiOutlineArrowDownTray />{" "}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
