"use client";
import React from "react";
import { Button } from "./ui/button";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

const DownloadCv = () => {
  return (
    <Button
      onClick={() => console.log("helo")}
      variant={"outline"}
      className="sm:gap-4  rounded-xl
             active:text-primary max-sm:mx-auto w-36 active:border-primary "
    >
      {" "}
      <span className="text-[10px]  sm:text-sm">Download CV</span>{" "}
      <HiOutlineArrowDownTray />{" "}
    </Button>
  );
};

export default DownloadCv;
