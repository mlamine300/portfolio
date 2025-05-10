import React from "react";
import ExperienceCard, { Experience } from "./ExperienceCard";
import { HiBriefcase } from "react-icons/hi2";
type QualificationProps = {
  experiences: Experience[];
  education: Experience[];
};
const Qualifications = ({ experiences, education }: QualificationProps) => {
  return (
    <section className="flex flex-col gap-4 w-full h-full p-4">
      <h1 className="text-4xl text-text_primary font-bold mt-2">
        My Awesome Journey
      </h1>
      <div className="flex gap-4 mt-2 justify-between">
        <div className="flex flex-col gap-4  w-full">
          <div className="flex gap-4 items-center justify-center ">
            <HiBriefcase className="text-primary text-3xl" />
            <h3 className="text-3xl font-semibold text-primary">Experiences</h3>
          </div>
          {experiences.map((item, index) => (
            <ExperienceCard
              key={index}
              description={item.description}
              dateFrom={item.dateFrom}
              dateTo={item.dateTo}
              company={item.company}
            />
          ))}
        </div>

        <div className="flex flex-col   w-full">
          <div className="flex gap-4 items-center justify-center">
            <HiBriefcase className="text-primary text-3xl" />
            <h3 className="text-3xl font-semibold text-primary">Education</h3>
          </div>
          {education.map((item, index) => (
            <ExperienceCard
              key={index}
              description={item.description}
              dateFrom={item.dateFrom}
              dateTo={item.dateTo}
              company={item.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
