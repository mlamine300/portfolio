import React from "react";
import {
  HiUser,
  HiEnvelope,
  HiAcademicCap,
  HiPhone,
  HiCalendar,
  HiHome,
} from "react-icons/hi2";

const PersonalInfo = () => {
  const info = [
    { icon: <HiUser />, text: "Laoufi Mohamed Lamine", onClick: () => {} },
    {
      icon: <HiEnvelope />,
      text: "laoufi.lamine.dev@gmail.com",
      onClick: () => {},
    },
    {
      icon: <HiAcademicCap />,
      text: "Master's Degree in Computer Science",
      onClick: () => {},
    },

    {
      icon: <HiPhone />,
      text: "+213 676 21 77 01",
      onClick: () => {},
    },
    {
      icon: <HiCalendar />,
      text: "Born on 01/01/1998",
      onClick: () => {},
    },
    {
      icon: <HiHome />,
      text: "Cite bellevue Ain benian, Algeirs Algeria",
      onClick: () => {},
    },
  ];

  return (
    <section className="flex flex-col gap-4 w-full h-full p-4">
      <h2 className="text-2xl font-bold text-text_primary">
        Unmatched Service Quality for Over 3 Years
      </h2>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum nam
        enim nihil est aliquam. Est consectetur magnam inventore aliquid,
        delectus ex nostrum architecto, nihil nulla pariatur, quisquam maiores
        rerum!
      </p>
      <div className="grid grid-cols-2 grid-rows-3 gap-x-20 px-6  grid-flow-col">
        {info.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-primary mr-4">{item.icon}</span>
            <p className="text-lg text-text_primary font-semibold">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <h3 className="text-primary text-lg font-light mt-4">Language Skill</h3>
      <div className="bg-primary/30 mx-2 h-[1px] w-full  " />
      <h4 className="text-lg font-light text-text_primary">
        English, French, Arabic
      </h4>
    </section>
  );
};

export default PersonalInfo;
