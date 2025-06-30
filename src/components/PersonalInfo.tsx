import React, { ReactNode } from "react";

type PersonalInfoProps = {
  infos: { icon: ReactNode; text: string; onClick: () => void }[];
  language: string[];
};

const PersonalInfo = ({ infos, language }: PersonalInfoProps) => {
  return (
    <section className="flex flex-col items-center gap-4 w-full h-full p-4">
      <h2 className="text-2xl font-bold text-text_primary text-center">
        Unmatched Service Quality for Over 3 Years
      </h2>
      <p className="text-muted-foreground text-center sm:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum nam
        enim nihil est aliquam. Est consectetur magnam inventore aliquid,
        delectus ex nostrum architecto, nihil nulla pariatur, quisquam maiores
        rerum!
      </p>
      <div className="flex flex-col gap-4 items-center max-sm:text-center sm:text-start sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-20 px-6  sm:grid-flow-col">
        {infos.map((item, index) => (
          <div key={index} className="  flex  w-full items-center justify-stretch gap-1 sm:gap-2">
            <span className="text-primary mr-1 sm:mr-4 my-auto sm:text-lg   text-sm ">{item.icon}</span>
            <p className="sm:text-lg w-full text-sm text-text_primary font-semibold">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <h3 className="text-primary text-lg font-light mt-4">Language Skill</h3>
      <div className="bg-primary/30 mx-2 h-[1px] w-full  " />
      <h4 className="text-lg font-light text-text_primary">
        {language.map((lang, index) => (
          <span key={index} className="text-text_primary">
            {lang}
            {index < language.length - 1 ? ", " : ""}
          </span>
        ))}
      </h4>
    </section>
  );
};

export default PersonalInfo;
