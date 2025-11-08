"use client";
import { Project } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { ProjectSchema } from "@/types/zod";
import FormItem from "./FormItem";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import Image from "next/image";
import { cn } from "@/lib/utils";

import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

const initData: Project = {
  name: "",
  image: "",
  category: "",
  description: "",
  github: "",
  link: "",
  tools: [],
};

const AddEdditProject = ({ project }: { project?: Project | null }) => {
  const { push } = useRouter();
  const [tool, setTool] = useState<{
    name: string;
    className?: string;
    image?: string;
  } | null>(null);
  const form = useForm<Project>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: project || initData,
  });

  const AddProject = async (data: Project) => {
    if (project) {
      const res = await axiosInstance.put(`/project/${project._id}`, data);
      if (res.status === 201) {
        push("/admin/project");
      }
    } else {
      console.log(data);
      const res = await axiosInstance.post(`/project`, data);
      if (res.status === 201) {
        alert("Project Added");
        form.reset(initData);
      }
      console.log(res);
    }
    console.log(data);
  };
  const deleteProject = async () => {
    if (!project?._id) return;
    const res = await axiosInstance.delete(`/project/${project?._id}`);
    if (res.status === 200) {
      alert("project deleted");
      push("/admin/project");
    }
  };

  return (
    <Form {...form}>
      <form
        className="w-full max-w-[800px] flex flex-col gap-4 rounded-2xl p-8 bg-accent shadow-2xl"
        onSubmit={form.handleSubmit(AddProject)}
      >
        <h3 className="font-semibold text-xl my-2">
          {project ? "Edit Project" : "Add New Project"}{" "}
        </h3>
        <div className="flex gap-4 flex-col md:flex-row">
          <FormItem
            inputClassName="text-xs font-semibold"
            control={form.control}
            name={"name"}
          />
          <FormItem
            inputClassName="text-xs font-semibold"
            control={form.control}
            name={"category"}
          />
        </div>

        <div className="w-full">
          <FormItem
            inputClassName="text-xs"
            control={form.control}
            name={"description"}
            type="area"
          />
        </div>
        <FormItem
          inputClassName="text-xs font-medium italic text-blue-900 underline"
          control={form.control}
          name={"image"}
          label="Image Url"
        />

        <FormItem
          inputClassName="text-xs font-medium italic text-blue-900 underline "
          control={form.control}
          name={"github"}
          label="Github Url"
        />
        <FormItem
          className="text-xs font-medium italic text-blue-900 underline"
          control={form.control}
          name={"link"}
          label="Project Url"
        />
        <div className="flex flex-col gap-2 shadow-2xl p-1">
          <h2>Tools</h2>
          <div className="flex flex-col md:flex-row gap-2">
            {/* <label htmlFor="tool_name" className="grow text-nowrap">
                Tool Name{" "}
              </label> */}
            <Input
              className="w-full grow"
              id="tool_name"
              type="text"
              placeholder="tool name"
              value={tool?.name || ""}
              onChange={(e) => setTool((t) => ({ ...t, name: e.target.value }))}
            />
            <Input
              className="w-full grow"
              id="tool_className"
              type="text"
              placeholder="tool className"
              value={tool?.className || ""}
              onChange={(e) =>
                setTool((t) => ({ ...t, className: e.target.value }))
              }
            />
            <Input
              className="w-full grow"
              id="tool_image"
              type="text"
              placeholder="tool Image Link"
              value={tool?.image || ""}
              onChange={(e) =>
                setTool((t) => ({ ...t, image: e.target.value }))
              }
            />
            <Button
              disabled={tool === null || tool?.name === ""}
              variant={"outline"}
              type="button"
              className="md:ml-4 text-xs w-fit self-center"
              onClick={() => {
                if (tool) {
                  //form.setValue("tools", [...form.watch("tools"), tool]);
                  form.watch("tools")?.push(tool);
                  setTool(null);
                }
              }}
            >
              Add Tool{" "}
            </Button>
          </div>
          <div className="flex flex-wrap">
            {form.watch("tools")?.map((tool, index) => (
              <div
                key={index + ""}
                className={cn(
                  "flex gap-1 items-center rounded-full px-2 bg-primary py-1  text-[12px] font-semibold text-background ",
                  tool.className
                )}
              >
                {tool.image && (
                  <Image
                    src={tool.image}
                    width={20}
                    height={20}
                    className=""
                    alt={tool.name}
                  />
                )}
                <p>{tool.name} </p>
              </div>
            ))}
          </div>
        </div>
        <Button type="submit">{project ? "Edit" : "Add"}</Button>
        {project && (
          <Button
            onClick={() => deleteProject()}
            variant={"destructive"}
            type="button"
          >
            Delete Project
          </Button>
        )}
      </form>
    </Form>
  );
};

export default AddEdditProject;
