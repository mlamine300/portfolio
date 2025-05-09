"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
export type navlink = {
  name: string;
  href: string;
};
export type NavProps = {
  links: navlink[];
  parentClassName?: string; // Parent class name for the component
  elementsClassName?: string; // Class name for the elements inside the component
  underLineClassName?: string; // Class name for the underline element
};

const Nav = ({
  links,
  parentClassName,
  elementsClassName,
  underLineClassName,
}: NavProps) => {
  const path = usePathname();
  return (
    <nav className={parentClassName}>
      {links.map((link) => (
        <div
          key={link.name}
          className={twMerge("flex flex-colitems-center", elementsClassName)}
        >
          <Link
            className={path === link.href ? "text-primary mb-1" : ""}
            href={link.href}
          >
            {link.name}{" "}
          </Link>
          {path === link.href && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              layoutId="underline"
              className={underLineClassName}
            ></motion.span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Nav;
