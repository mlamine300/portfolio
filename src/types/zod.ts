import { z } from "zod";

export const ProjectToolSchema = z.object({
  name: z
    .string()
    .min(3, "tool name must be more then 3 letters")
    .max(35, "tool name to long"),
  image: z.string().url("please provide a valid url").optional(),
  className: z
    .string()
    .min(3, "tool name must be more then 3 letters")
    .max(35, "tool name to long")
    .optional(),
});

export const ProjectSchema = z.object({
  _id: z.string().optional(),
  name: z
    .string()
    .min(3, "Project name must be more then 3 letters")
    .max(35, "Project name to long"),
  image: z.string().url("please provide a valid url"),
  category: z
    .string()
    .min(3, "Project category must be more then 3 letters")
    .max(35, "Project category to long"),
  description: z
    .string()
    .min(3, "Project description must be more then 3 letters"),
  link: z.string().url("please provide a valid url"),
  github: z
    .string()
    .url("please provide a valid url")
    .startsWith(
      "https://github.com/mlamine300/",
      "github link should start with {'https://github.com/mlamine300/'}"
    ),
  tools: z.array(ProjectToolSchema).optional(),
});

export const ReviewShema = z.object({
  _id: z.string().optional(),
  name: z
    .string()
    .min(3, "name should have more then 3 charactere")
    .max(35, "name to long"),
  title: z
    .string()
    .min(3, "title should have more then 3 charactere")
    .max(35, "title to long"),
  image: z
    .string()
    .url({ message: "Invalid URL" })
    .or(z.literal(""))
    .optional(),
  review: z.string().min(10, "please provide a longer text"),
  company: z
    .string()
    .min(3, "company name should have more then 3 charactere")
    .max(35, "company name to long"),
});
