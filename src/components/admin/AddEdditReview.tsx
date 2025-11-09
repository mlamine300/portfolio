"use client";
import { Review } from "@/types";
import { ReviewShema } from "@/types/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import FormItem from "./FormItem";
import { Button } from "../ui/button";
import DeleteButton from "../DeleteButton";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

const AddEdditReview = ({ review }: { review?: Review | null }) => {
  const { push } = useRouter();
  const initValue: Review = {
    name: "",
    company: "",
    title: "",
    review: "",
    image: "",
  };
  const form = useForm<Review>({
    resolver: zodResolver(ReviewShema),
    defaultValues: review || initValue,
  });
  const AddReview = async (data: Review) => {
    if (!data) return;
    if (review && review._id) {
      const res = await axiosInstance.put(`review/${review._id}`, data);
      if (res.status === 200) {
        alert("review Upadeted succefully");
        push("/admin/review");
      }
    } else {
      console.log(data);
      const res = await axiosInstance.post("review", data);
      if (res.status === 200) {
        alert("review Added succefully");
        form.reset();
      }
    }
  };
  const deleteReview = async () => {
    if (!review || !review._id) return;
    const res = await axiosInstance.delete(`review/${review._id}`);
    if (res.status === 200) {
      alert("review Deleted succefully");
      push("/admin/review");
    }
  };
  return (
    <Form {...form}>
      <form
        className="w-full max-w-[800px] flex flex-col gap-4 rounded-2xl p-8 bg-accent shadow-2xl"
        onSubmit={form.handleSubmit(AddReview)}
      >
        <h3 className="font-semibold text-xl my-2">
          {review ? "Edit Review" : "Add New Review"}{" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
          <FormItem
            control={form.control}
            inputClassName="text-xs"
            name="name"
          />
          <FormItem
            control={form.control}
            inputClassName="text-xs"
            name="title"
          />
          <FormItem
            control={form.control}
            inputClassName="text-xs"
            name="image"
          />
          <FormItem
            control={form.control}
            inputClassName="text-xs"
            name="company"
          />
          <FormItem
            control={form.control}
            inputClassName="text-xs"
            name="review"
            type="area"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row-reverse md:gap-4">
          <Button type="submit">{review ? "Edit Review" : "Add Review"}</Button>
          {review && (
            <DeleteButton
              text=" This action cannot be undone. This will permanently delete this
            project"
              onClick={() => deleteReview()}
            />
          )}
        </div>
      </form>
    </Form>
  );
};

export default AddEdditReview;
