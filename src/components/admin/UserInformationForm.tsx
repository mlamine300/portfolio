/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import FormItem from "./FormItem";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
// lib/validations/user.ts
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "@/lib/axiosInstance";
import { ExperienceCarousel } from "../ExperienceCarousel";
import AddExperienceForm from "../AddExperienceForm";
import { Card, CardAction, CardContent, CardTitle } from "../ui/card";

import { Input } from "../ui/input";
import { DatePicker } from "../DateOfBirthPicker";
import { Button } from "../ui/button";
import { deepEqual } from "@/lib/utils";
import Link from "next/link";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export const ExperienceSchema = z.object({
  company: z.string().min(4, "Company name is required"),
  start: z.coerce.date(),
  end: z.coerce.date(),
  title: z.string().min(4, "Title is required"),
});

export const EducationSchema = z.object({
  university: z.string().min(4, "University is required"),
  start: z.coerce.date(),
  end: z.coerce.date(),
  degree: z.string().min(4, "Degree is required"),
});

export const UserSchema = z.object({
  address: z.string().min(1, "Address is required"),
  dateOfBirth: z.coerce.date(),
  education: z.string().min(1, "education is required"),
  email: z.string().email("Invalid email"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone number must be valid"),
  summary: z.string().min(10, "Summary too short"),
  experiences: z.array(ExperienceSchema),
  educations: z.array(EducationSchema),
});
export type User = z.infer<typeof UserSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
const UserInformationForm = () => {
  const [initialData, setInitialData] = useState<User | null>(null);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const form = useForm<User>({
    resolver: zodResolver(UserSchema),

    disabled: isFormDisabled,
    defaultValues: {
      address: "",
      dateOfBirth: new Date(),
      education: "",
      email: "",
      name: "",
      phone: "",
      summary: "",
      experiences: [
        { company: "", start: new Date(), end: new Date(), title: "" },
      ],
      educations: [
        { university: "", start: new Date(), end: new Date(), degree: "" },
      ],
    },
  });
  const checkDisabled = (userInfo: User) => {
    if (initialData === null) {
      alert("null");
      return false;
    }

    if (deepEqual(userInfo, initialData)) {
      alert("there is no change to update");
      return false;
    }
    return true;
  };
  const submit = async (data: User) => {
    if (!checkDisabled(data)) {
      return false;
    }
    try {
      setIsFormDisabled(true);
      console.log(data);
      const res = await axiosInstance.post("/user", data);
      console.log(res);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsFormDisabled(false);
    }
  };
  try {
    useEffect(() => {
      const getUserData = async () => {
        const res = await axiosInstance.get("/user");
        console.log(res.data);
        const { data } = UserSchema.safeParse(res.data);
        setInitialData(data || null);
        form.reset(data);
      };
      getUserData();
    }, [form]);
  } catch (error) {
    console.error(error);
  }
  return (
    <Form {...form}>
      <AddExperienceForm
        addFunction={(exp: Experience) =>
          form.setValue("experiences", [exp, ...form.getValues("experiences")])
        }
      />
      <form
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col bg-accent shadow-2xl rounded-2xl  mx-10 mt-20 p-5 gap-4"
      >
        <div className="flex justify-center">
          <h3 className="text-xl font-semibold">Update User Information</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <FormItem name="name" control={form.control} />
          <FormItem
            name="dateOfBirth"
            type="date"
            label="Date Of Birth"
            control={form.control}
          />
        </div>

        <FormItem name="education" control={form.control} />

        <FormItem type="area" name="summary" control={form.control} />

        <h3 className="text-lg font-semibold italic">Contact</h3>

        <div className="flex flex-col md:flex-row gap-2">
          <FormItem name="phone" control={form.control} />
          <FormItem name="email" control={form.control} />
          <FormItem name="address" control={form.control} />
        </div>
        <ExperienceCarousel
          setExperiences={(exp: Experience[]) => {
            form.setValue("experiences", exp);
          }}
          experiences={form.watch("experiences")}
        />
        <div>
          <h3 className="text-xl font-semibold">Education</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-5">
            {form.watch("educations").map((edu, index) => (
              <Card className="w-full h-fit  " key={index}>
                <CardTitle className="flex">
                  <h3 className="w-full text-2xl font-black italic text-primary text-center ">
                    {edu.degree}
                  </h3>
                </CardTitle>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex flex-col ">
                    <label
                      className="font-semibold text-lg"
                      htmlFor={`university${index}`}
                    >
                      University
                    </label>
                    <Input
                      id={`university${index}`}
                      name="university :"
                      value={edu.university}
                      onChange={(e) =>
                        form.setValue(
                          "educations",
                          form
                            .watch("educations")
                            .map((x, i) =>
                              i === index
                                ? { ...x, university: e.target.value }
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
                      Degree
                    </label>
                    <Input
                      id={`degree${index}`}
                      name="degree :"
                      value={edu.degree}
                      className="font-semibold w-full shrink"
                      onChange={(e) =>
                        form.setValue(
                          "educations",
                          form
                            .watch("educations")
                            .map((x, i) =>
                              i === index ? { ...x, degree: e.target.value } : x
                            )
                        )
                      }
                    />
                  </div>

                  <div className="flex flex-col 2xl:flex-row gap-4 2xl:gap-2">
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
                        date={edu.start}
                        buttonClassName="max-md:max-w-full px-2 lg:text-sm text-xs"
                        setDate={(date) =>
                          form.setValue(
                            "educations",
                            form
                              .watch("educations")
                              .map((x, i) =>
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
                        date={edu.end}
                        buttonClassName="max-md:max-w-full px-2 lg:text-sm text-xs"
                        setDate={(date) =>
                          form.setValue(
                            "educations",
                            form
                              .watch("educations")
                              .map((x, i) =>
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
                <CardAction className="flex justify-center w-full"></CardAction>
              </Card>
            ))}
          </div>
        </div>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting || isFormDisabled}
          className="disabled:bg-muted-foreground disabled:cursor-not-allowed"
        >
          Update
        </Button>
        <div className="my-2 w-full flex justify-between px-8 text-primary font-semibold italic underline">
          <Link className="flex items-center gap-2" href={"/admin/review"}>
            {" "}
            <BsChevronDoubleLeft className="font-semibold" />
            Manage reviews{" "}
          </Link>
          <Link className="flex items-center gap-2" href={"/admin/project"}>
            Manage Projects
            <BsChevronDoubleRight className="font-semibold" />
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default UserInformationForm;
