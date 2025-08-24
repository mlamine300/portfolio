import React from "react";
import SocialMediaBar from "./SocialMediaBar";

const Footer = () => {
  return (
    <footer className="h-32 bg-accent-foreground/95 flex flex-col items-center justify-center dark:bg-accent">
      <SocialMediaBar
        className="mt-2"
        iconClassName="md:text-4xl text-xl text-primary dark:text-foreground hover:text-gray-800  dark:hover:text-gray-200 transition-colors duration-300"
      />
      <h2 className="md:text-lg text-xs text-muted-foreground font-semibold mt-4">
        Copyright &copy; Laoufi Mohamed Lamine. All right reserved{" "}
      </h2>
    </footer>
  );
};

export default Footer;
