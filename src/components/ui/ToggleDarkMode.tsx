"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";
const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant={"secondary"}
      className="rounded-2xl w-10 h-10 relative hover:cursor-pointer "
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <MoonIcon className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0  text-orange-400 " />
      <SunIcon className="absolute dark:rotate-0 dark:scale-100 transition-all  rotate-90 scale-0 text-yellow-300" />
    </Button>
  );
};

export default ToggleDarkMode;
