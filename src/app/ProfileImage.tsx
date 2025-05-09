import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return (
    <div
      className="flex items-center justify-center p-4
    bg-[url(/public/profile_background.png)] bg-no-repeat bg-contain w-64"
    >
      <Image
        alt="profile"
        src={"/profile 1.png"}
        width={256}
        height={256}
      ></Image>
    </div>
  );
};

export default ProfileImage;
