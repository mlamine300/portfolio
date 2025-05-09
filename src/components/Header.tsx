"use client";
import React from "react";
import Image from "next/image";
// import ToggleDarkMode from "./ToggleDarkMode";
import Nav, { navlink } from "./Nav";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import MobileNav from "./MobileNav";
import ToggleDarkMode from "./ToggleDarkMode";
// import MobileNav from "./MobileNav";
// import image from "/logo.png"; // Adjust the path as necessary
const Header = () => {
  const navlinks: navlink[] = [
    {
      name: "Home",
      href: "/",
    },

    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];
  const scrollYProgress = useScrollProgress(); // Custom hook to get scroll progress
  return (
    <header
      className={`z-50 ${
        scrollYProgress ? "h-14 shadow-lg shadow-stone-700 " : "h-16"
      } bg-background fixed top-0 right-0 left-0 bg-gray-1  px-4`}
    >
      <div
        className={` max-w-[1000px] mx-auto  flex items-center justify-between h-14`}
      >
        <Image alt="logo" src={"/logo.png"} width={50} height={50} />
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-4">
            <Nav
              links={navlinks}
              parentClassName=" flex items-center gap-4 font-[400] text-text_primary text-lg"
              elementsClassName="mx-2 relative"
              underLineClassName="bg-primary px-4 absolute top-max right-0 left-0 bottom-0 h-[3px] w-full transition-all duration-300 ease-in-out"
            />
            <ToggleDarkMode />
          </div>
          <div className="sm:hidden flex items-center gap-4">
            <MobileNav links={navlinks} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
