import Link from "next/link";
import React from "react";

import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsEnvelope,
  BsGithub,
} from "react-icons/bs";

type socialMediaBarProps = {
  className?: string;
};

const socials = [
  {
    icon: <BsInstagram />,
    link: "https://www.instagram.com/lamine_dev",
  },
  { icon: <BsFacebook />, link: "https://www.facebook.com/lamine_dev" },
  { icon: <BsLinkedin />, link: "https://www.linkedin.com/lamine_dev" },
  { icon: <BsEnvelope />, link: "laoufi.lamine.dev@gmail.com" },
  { icon: <BsGithub />, link: "https://www.github.com/mlamine300" },
];
const SocialMediaBar = ({ className }: socialMediaBarProps) => {
  return (
    <div className={className}>
      <ul className="flex gap-4 sm:gap-8 items-center mx-2 justify-center sm:justify-start sm:mx-8 self-center">
        {socials.map((social, index) => (
          <li
            key={index}
            className="text-2xl text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
          >
            <Link href={social.link}>{social.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaBar;
