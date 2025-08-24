"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader } from "./ui/card";

const Reviews = () => {
  const { theme } = useTheme();
  const reviews = [
    {
      name: "John Doe",
      title: "CEO, Company A",
      image: "/reviews/avatar-1.png",
      review: "This is a fantastic service! Highly recommended.",
    },
    {
      name: "Jane Smith",
      title: "CTO, Company B",
      image: "/reviews/avatar-2.png",
      review: "Professional and efficient. Will use again.",
    },
    {
      name: "Alice Johnson",
      title: "Manager, Company C",
      image: "/reviews/avatar-3.png",
      review: "Exceeded our expectations in every way.",
    },
    {
      name: "Bob Brown",
      title: "Developer, Company D",
      image: "/reviews/avatar-4.png",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Charlie Davis",
      title: "Designer, Company E",
      image: "/reviews/avatar-5.png",
      review: "Creative solutions and great attention to detail.",
    },
    {
      name: "Eve Wilson",
      title: "Entrepreneur, Startup F",
      image: "/reviews/avatar-6.png",
      review: "Innovative approach that delivered real results.",
    },
  ];

  return (
    <section className="flex flex-col self-center sm:w-[700px] sm:max-w-[700px]  items-center gap-4 py-8">
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

      <div className="flex justify-center xl:max-w-[1300px]">
        <Swiper
          className="max-md:max-w-[600px] max-sm:max-w-[400px]    xl:absolute right-0 top-0 mt-10"
          spaceBetween={50}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((r, index) => (
            <SwiperSlide className="xl:min-w-[500px] h-[350px]" key={index}>
              <Card className="rounded-4xl h-[350px]">
                <CardHeader>
                  <div className="flex items-center md:flex-row flex-col gap-6  p-3">
                    <Image
                      src={r.image}
                      alt={r.name}
                      width={100}
                      height={100}
                      className="w-16 h-16 md:w-24 md:h-24 rounded-full mt-1 "
                    />
                    <div className="flex flex-col md:mt-4 gap-1">
                      <h3 className="md:text-2xl text-lg font-bold">
                        {r.name}
                      </h3>
                      <p className="md:text-lg text-xs text-muted-foreground mb-4">
                        {r.title}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="ml-8 md:px-6 text-xs px-2 md:text-lg font-semibold text-text-secondary overflow-y-auto">
                  {r.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
