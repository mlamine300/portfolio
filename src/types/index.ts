// export type Project = {
//   _id?: string;
//   image: string;
//   category: string;
//   name: string;
//   description: string;
//   link: string;
//   github: string;
//   tools?: { name: string; img: string; className: string }[];
// };

import { z } from "zod";
import { ProjectSchema, ReviewShema } from "./zod";

export type Project = z.infer<typeof ProjectSchema>;
export type Review = z.infer<typeof ReviewShema>;
