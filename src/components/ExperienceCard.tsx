import Image from "next/image";
import React from "react";
export type Experience = {
  //   icon: React.ReactNode;
  //   title: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  company: string;
};
const ExperienceCard = ({
  // icon,
  // title,
  description,
  dateFrom,
  dateTo,
  company,
}: Experience) => {
  return (
    <div className="flex flex-col m-2">
      {/* <div className="flex gap-2 items-center">
        <span className="text-primary">{icon}</span>
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
      </div> */}
      <div className="flex gap-2">
        <Image
          src={"point.svg"}
          alt="point"
          className="mx-5 h-full  "
          width={10}
          height={10}
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-text_primary">{company}</h3>
          <p className="text-lg text-muted-foreground mb-2">{description}</p>
          <p className="text-sm text-text_primary">
            {dateFrom} - {dateTo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
