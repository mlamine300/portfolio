"use client";
import React, { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "./button";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sm:hidden flex items-center justify-between p-4 ">
      <Button
        variant="outline"
        onClick={toggleMenu}
        className={`rounded-2xl w-10 h-10 relative hover:cursor-pointer transition-all duration-1000 ease-in-out ${
          isOpen && "rotate-45 scale-0"
        }`}
      >
        <AlignJustify />
      </Button>
    </div>
  );
};

export default MobileNav;
