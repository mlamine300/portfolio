import React from "react";
import { Button } from "./ui/button";

import {
  HiOutlinePaperAirplane,
  HiOutlineArrowDownTray,
  HiOutlineClipboardDocumentList,
  HiUserGroup,
  HiOutlineBriefcase,
} from "react-icons/hi2";

import ProfileImage from "./ProfileImage";
import SocialMediaBar from "./SocialMediaBar";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="mt-20 md:mt-5 w-full flex flex-col items-center ">
      <div className="flex gap-4 justify-center ">
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
          <SocialMediaBar className="mt-4" />
        </div>
        <div className="hidden sm:flex relative ml-8 ">
          <ProfileImage />
          <Badge
            keyName="Years of Experience"
            containerStyles="bg-background/90 absolute gap-4 w-60 px-3 py-2 -top-8 -left-12  z-2  shadow-md shadow-stone-700"
            keyStyle="text-forground font-semibold text-md capitalize"
            valueStyle="text-primary font-bold text-4xl"
            value={3}
            duration={1000}
            step={0.3}
            icon={<HiOutlineBriefcase className="text-primary text-3xl " />}
          />
          <Badge
            keyName="Finished Projects"
            containerStyles="bg-background/90 absolute gap-4 w-60 px-3 py-2 top-50 -left-30  z-2  shadow-md shadow-stone-700"
            keyStyle="text-forground font-semibold text-md capitalize"
            valueStyle="text-primary font-bold text-4xl"
            value={16}
            duration={2000}
            step={2}
            icon={
              <HiOutlineClipboardDocumentList className="text-primary text-3xl " />
            }
          />
          <Badge
            keyName="Happy Clients"
            containerStyles="bg-background/90 absolute gap-4 w-60 px-3 py-2 top-30 left-50  z-2  shadow-md shadow-stone-700"
            keyStyle="text-forground font-semibold text-md capitalize"
            valueStyle="text-primary font-bold text-4xl"
            value={4}
            duration={2000}
            step={0.2}
            icon={<HiUserGroup className="text-primary text-3xl " />}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
