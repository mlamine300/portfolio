"use client";
import { Card, CardAction, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type Experience } from "@/components/admin/UserInformationForm";
import { Input } from "./ui/input";
import { DatePicker } from "./DateOfBirthPicker";
import { Button } from "./ui/button";
import { Plus, Trash2 } from "lucide-react";
import { SheetTrigger } from "./ui/sheet";
import { useRef } from "react";
export function ExperienceCarousel({
  experiences,
  setExperiences,
}: {
  experiences: Experience[];
  setExperiences: (xperiences: Experience[]) => void;
}) {
  const trigger = useRef<HTMLButtonElement>(null);
  if (!experiences) return "";
  return (
    <div>
      <div className="flex gap-8">
        <h3 className="text-xl font-semibold">Experience</h3>
        <SheetTrigger ref={trigger}>
          <Plus className="bg-primary text-accent cursor-pointer" />
        </SheetTrigger>
      </div>

      <Carousel className="mx-auto  w-full lg:w-8/12 h-fit">
        <CarouselContent className=" w-full h-fit">
          {experiences.map((exp, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Card className="w-full h-fit ">
                  <CardTitle className="flex">
                    <h3 className="w-full text-2xl font-black italic text-primary text-center ">
                      {exp.company}
                    </h3>
                    <button
                      type="button"
                      onClick={() =>
                        setExperiences(
                          experiences.filter((x, i) => i !== index)
                        )
                      }
                    >
                      <Trash2 className="text-red-500 self-end mx-2 cursor-pointer hover:rotate-45 ease-in-out duration-500" />
                    </button>
                  </CardTitle>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col ">
                      <label
                        className="font-semibold text-lg"
                        htmlFor={`company${index}`}
                      >
                        Company
                      </label>
                      <Input
                        id={`company${index}`}
                        name="Company :"
                        value={exp.company}
                        onChange={(e) =>
                          setExperiences(
                            experiences.map((x, i) =>
                              i === index
                                ? { ...x, company: e.target.value }
                                : x
                            )
                          )
                        }
                        className="font-semibold w-full shrink"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label
                        className="font-semibold text-lg"
                        htmlFor={`title${index}`}
                      >
                        Title
                      </label>
                      <Input
                        id={`title${index}`}
                        name="title :"
                        value={exp.title}
                        className="font-semibold w-full shrink"
                        onChange={(e) =>
                          setExperiences(
                            experiences.map((x, i) =>
                              i === index ? { ...x, title: e.target.value } : x
                            )
                          )
                        }
                      />
                    </div>

                    <div className="flex flex-col xl:flex-row gap-4 xl:justify-around">
                      <div className="flex flex-row  gap-4 items-center lg:flex-col lg:gap-1 lg:items-start">
                        <label
                          className="w-fit min-w-fit font-semibold  lg:text-sm text-xs"
                          htmlFor={`start${index}`}
                        >
                          Start Date
                        </label>
                        <DatePicker
                          className=" max-w-9/12"
                          id={`start${index}`}
                          date={exp.start}
                          buttonClassName="max-md:max-w-full px-2 lg:text-sm text-xs"
                          setDate={(date) =>
                            setExperiences(
                              experiences.map((x, i) =>
                                index === i
                                  ? { ...x, start: date || new Date() }
                                  : x
                              )
                            )
                          }
                        />
                      </div>

                      <div className="flex flex-row  gap-4 items-center lg:flex-col lg:gap-1 lg:items-start">
                        <label
                          className="w-fit min-w-fit font-semibold  lg:text-sm text-xs"
                          htmlFor={`title${index}`}
                        >
                          End Date
                        </label>
                        <DatePicker
                          className=" max-w-9/12"
                          id={`nd${index}`}
                          date={exp.end}
                          buttonClassName="max-md:max-w-full px-2 lg:text-sm text-xs"
                          setDate={(date) =>
                            setExperiences(
                              experiences.map((x, i) =>
                                index === i
                                  ? { ...x, end: date || new Date() }
                                  : x
                              )
                            )
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardAction className="flex justify-center w-full">
                    <Button
                      type="button"
                      onClick={() => console.log(experiences)}
                    >
                      Update
                    </Button>
                  </CardAction>
                </Card>
              </div>
            </CarouselItem>
          ))}
          <CarouselItem key={"last"} className="h-full m-auto ">
            <div className="p-1 h-full  ">
              <Card className="w-fit mx-auto p-20 h-full flex items-center justify-center ">
                <Plus
                  onClick={() => {
                    if (trigger.current) trigger.current.click();
                  }}
                  size={150}
                  className="bg-accent-foreground/20 rounded-full w-full text-9xl text-primary cursor-pointer"
                />
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious type="button" />
        <CarouselNext type="button" />
      </Carousel>
    </div>
  );
}
