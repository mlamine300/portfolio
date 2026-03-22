/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AddEdditProject from "@/components/admin/AddEdditProject";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { Project } from "@/types";
import Loading from "@/components/loading";


const AddEditProject = ({ params }: { params: any }) => {
  const [fetching, setFetching] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const id = params.id;
  useEffect(() => {
    const fetchProjectById = async () => {
      setFetching(true);
      const res = await axiosInstance.get(`/project/${id}`);
      if (res.status === 200) {
        setProject(res.data);
      }
      setFetching(false);
    };
    if (id !== "new") fetchProjectById();
  }, [id]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-16 relative">
      {fetching ? <Loading /> : <AddEdditProject project={project} />}
    </main>
  );
};

export default AddEditProject;
