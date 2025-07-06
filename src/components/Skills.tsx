import React, { ReactNode } from "react";

type SkillsProps = {
  skills: string[];
  tools: ReactNode[];
};

const Skills = ({ skills, tools }: SkillsProps) => {
  return (
    <section className="flex flex-col items-center sm:items-start gap-4 w-full h-full sm:p-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-text_primary  mt-2">
        Tools I Use Everyday
      </h1>
      <h3 className="mt-4 text-xl sm:text-2xl font-bold">Skills</h3>
      <p className=" w-1/2 h-[1px] bg-primary/50" />
      {skills.map((skill, index) => (
        <p className="text-lg font-semibold" key={index}>
          {skill}
        </p>
      ))}

      <h3 className="mt-2 text-2xl font-bold">Tools</h3>
      <p className=" w-[50%] h-[1px] bg-primary/50" />
      <div className="flex gap-10 ">
        {tools.map((tool, index) => (
          <span key={index} className="text-5xl text-primary">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
