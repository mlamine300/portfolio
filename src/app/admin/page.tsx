import { tokenService } from "@/lib/tokenServices";
import React from "react";

const page = () => {
  const token = tokenService.getToken();
  console.log(token);
  return (
    <div className="flex w-full h-full min-h-screen ">
      <h3 className="text-4xl text-red-500 bg-primary/20 ">
        dsssssssssssssssssssdfdfffffffffffffffffdsgsgfg
      </h3>
    </div>
  );
};

export default page;
