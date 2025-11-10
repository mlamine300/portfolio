"use client";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const CategoriesHeader = ({ categories }: { categories: string[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <TabsList className="max-sm:border-none max-sm:bg-background min-w-60 font-medium  text-xs sm:text-lg flex flex-col sm:flex-row sm:gap-20 sm:w-fit rounded-lg py-4 px-4 sm:px-20">
      {categories.map((cat, index) => (
        <TabsTrigger
          className=" sm:p-4 capitalize  px-4"
          value={cat}
          key={index}
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("category", cat);
            router.push(`?${params.toString()}`);
          }}
        >
          {cat}{" "}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default CategoriesHeader;
