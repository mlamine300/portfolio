"use client";
import React, { useEffect } from "react";
import FormItem from "./FormItem";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
// lib/validations/user.ts
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "@/lib/axiosInstance";

export const ExperienceSchema = z.object({
  company: z.string().min(1, "Company name is required"),
  start: z.coerce.date(),
  end: z.coerce.date(),
  title: z.string().min(1, "Title is required"),
});

export const EducationSchema = z.object({
  university: z.string().min(1, "University is required"),
  start: z.coerce.date(),
  end: z.coerce.date(),
  degree: z.string().min(1, "Degree is required"),
});

export const UserSchema = z.object({
  address: z.string().min(1, "Address is required"),
  dateOfBirth: z.coerce.date(),
  education: z.string().min(1, "education is required"),
  email: z.string().email("Invalid email"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone number must be valid"),
  summary: z.string().min(10, "Summary too short"),
  experience: z.array(ExperienceSchema),
  educations: z.array(EducationSchema),
});
export type User = z.infer<typeof UserSchema>;

const UserInformationForm = () => {
  const form = useForm<User>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      address: "",
      dateOfBirth: new Date(),
      education: "",
      email: "",
      name: "",
      phone: "",
      summary: "",
      experience: [
        { company: "", start: new Date(), end: new Date(), title: "" },
      ],
      educations: [
        { university: "", start: new Date(), end: new Date(), degree: "" },
      ],
    },
  });
  try {
    useEffect(() => {
      const getUserData = async () => {
        const data = await axiosInstance.get("/user");
        console.log(data.data);
        // setUserData(data.data);
        form.reset(data.data);
      };
      getUserData();
    }, [form]);
  } catch (error) {
    console.error(error);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={() => alert("hello")}
        className="flex flex-col bg-accent shadow-2xl rounded-2xl w-10/12 md:w-9/12 max-w-[1200px] mx-10 mt-20 p-5 gap-4"
      >
        <div className="flex justify-center">
          <h3 className="text-xl font-semibold">Update User Information</h3>
        </div>
        <div className="flex gap-4">
          <FormItem name="name" control={form.control} />
          <FormItem
            name="dateOfBirth"
            label="Date Of Birth"
            control={form.control}
          />
        </div>

        <FormItem name="education" control={form.control} />

        <FormItem name="summary" control={form.control} />

        <h3 className="text-lg font-semibold italic">Contact</h3>

        <div className="flex flex-col md:flex-row gap-2">
          <FormItem name="phone" control={form.control} />
          <FormItem name="email" control={form.control} />
          <FormItem name="address" control={form.control} />
        </div>

        {/* {Object.keys(userData).map((info) => (
            <MyFormItem control={form.control} name={info} key={info} />
          ))} */}
      </form>
    </Form>
  );
};

export default UserInformationForm;
