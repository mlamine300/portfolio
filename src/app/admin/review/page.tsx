"use client";
import Loading from "@/components/loading";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import axiosInstance from "@/lib/axiosInstance";
import { getRandomDarkColor } from "@/lib/utils";
import { Review } from "@/types";
import { PenLine, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ReviewAdminPage = () => {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const { theme } = useTheme();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosInstance.get("/review");
        console.log(res);
        if (res.status === 200) {
          setReviews(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-16 relative">
      <Link
        className="fixed z-10 bottom-20 right-10 md:bottom-10 md:left-[90%] w-10 h-10 md:w-16 md:h-16 2xl:w-24 2xl:h-24 flex items-center justify-center  rounded-full bg-primary/60  hover:bg-primary"
        href={"/admin/review/new"}
      >
        <Plus color="white" size={50} />
      </Link>
      <div className="flex sm:gap-8 gap-2 justify-center items-center ">
        <Image
          alt="ring"
          src={theme === "dark" ? "/ring-dark.svg" : "/ring.svg"}
          width={40}
          height={40}
          className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"
        />
        <h1 className="text-2xl sm:text-5xl font-bold text-text">Reviews</h1>
      </div>

      <div className="flex justify-center w-full  mt-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-8">
          {reviews ? (
            reviews.map((r, index) => (
              <Card key={index} className="rounded-4xl max-h-[550px] relative">
                <Link
                  className="absolute z-10 top-4 left-[85%] rounded-full bg-gray-900/40 p-2 hover:p-3 hover:bg-gray-900/60"
                  href={`/admin/review/${r._id}`}
                >
                  <PenLine color="white" />{" "}
                </Link>
                <CardHeader>
                  <div className="flex items-center md:flex-row flex-col gap-6  p-3">
                    {r.image ? (
                      <Image
                        src={r.image}
                        alt={r.name}
                        width={100}
                        height={100}
                        className="w-16 h-16 md:w-24 md:h-24 rounded-full mt-1 "
                      />
                    ) : (
                      <h3
                        style={{ backgroundColor: getRandomDarkColor() }}
                        className="w-16 h-16 md:w-24 md:h-24 rounded-full mt-1 text-white text-2xl flex items-center justify-center"
                      >
                        {r.name.trim().at(0)}
                      </h3>
                    )}
                    <div className="flex flex-col md:mt-4 gap-1">
                      <h3 className="md:text-2xl text-lg font-bold">
                        {r.name}
                      </h3>
                      <p className="md:text-lg text-xs text-muted-foreground">
                        {r.title}
                      </p>
                      <p className="md:text-lg text-xs text-muted-foreground font-medium italic ">
                        {r.company}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="ml-8 md:px-6 text-xs px-2 md:text-lg text-text-secondary overflow-y-auto font-medium italic">
                  {r.review}
                </CardDescription>
              </Card>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </main>
  );
};

export default ReviewAdminPage;
