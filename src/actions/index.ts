"use server";

import { axiosPublic } from "@/lib/axiosInstance";
import { Project, Review } from "@/types";

export const getAllProjects: () => Promise<Project[] | null> = async () => {
  try {
    const res = await axiosPublic.get("/project");
    console.log(res.data.projects);
    return res.data.projects;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const getAllReviews: () => Promise<Review[] | null> = async () => {
  try {
    const res = await axiosPublic.get("/review");
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
