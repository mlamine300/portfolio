"use client";

import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { Review } from "@/types";
import Loading from "@/components/loading";
import AddEdditReview from "@/components/admin/AddEdditReview";

const AddEditProject = ({ params }: { params: { id: string } }) => {
  const [fetching, setFetching] = useState(false);
  const [review, setReview] = useState<Review | null>(null);
  const id = params.id;
  useEffect(() => {
    const fetchProjectById = async () => {
      setFetching(true);
      const res = await axiosInstance.get(`/review/${id}`);
      console.log(res);
      if (res.status === 200) {
        setReview(res.data.data);
      }
      setFetching(false);
    };
    if (id !== "new") fetchProjectById();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-16 relative">
      {fetching ? <Loading /> : <AddEdditReview review={review} />}
    </main>
  );
};

export default AddEditProject;
