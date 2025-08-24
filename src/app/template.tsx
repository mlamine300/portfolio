"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import { useScrollProgress } from "@/hooks/useScrollProgress";

const Template = ({ children }: { children: ReactNode }) => {
  const scrollYProgress = useScrollProgress(); // Custom hook to get scroll progress
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "linear",
          delay: 0.2,
        }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${scrollYProgress - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-300"
      ></span>
      <div className="h-full"></div>
    </>
  );
};

export default Template;
