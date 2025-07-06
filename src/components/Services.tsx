"use client"
import { AppWindow, ChevronsLeftRightEllipsis, Palette } from 'lucide-react';
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

function Services() {
    const {theme}=useTheme();
    const services=[
            {icon:<Palette className='w-18 h-18 ' />,title:"Web Design",text:"lorem" },
            {icon:<ChevronsLeftRightEllipsis className='w-18 h-18  '/>,title:"Web Development",text:"lorem" },
            {icon:<AppWindow className='w-18 h-18 ' />,title:"App Development",text:"lorem" },
    ]
   
  return (
      <section className="flex  flex-col self-center sm:w-[700px]  sm:max-w-[700px]  sm:h-[900px] items-center gap-4 py-8">
          <div className="flex sm:gap-8 gap-2 justify-center items-center ">
            <Image
              alt="ring"
              src={theme === "dark" ? "/ring-dark.svg" : "/ring.svg"}
              width={40}
              height={40}
              className='w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]'
            />
            <h1 className="text-2xl sm:text-5xl font-bold text-text">My Services</h1>
          </div>
          <div>
            <div className='flex flex-col sm:flex-row gap-16 justify-center w-full mt-20 '>

           
            {services.map((service,indice)=>
                <Card key={indice} className='dark:border-primary text-center bg-background w-full items-center max-w-96 sm:w-96 h-80 rounded-4xl flex flex-col relative'>
                    <CardHeader className='absolute  w-full  left-0 flex justify-center  z-10 -mt-16 '>
                        <div className=' text-primary dark:text-white  bg-background w-36 h-20 flex justify-center'>
                            {service.icon}
                        </div>
                    </CardHeader>
                    <CardTitle className='text-2xl dark:text-white font-bold text-black mt-8'>
                    {service.title}
                    </CardTitle>
                    <CardContent className='font-light'>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae explicabo sunt minus ab, laboriosam consequuntur, illo magni veniam eveniet sequi deleniti incidunt voluptate quo voluptatum fuga sed, accusamus quod.
                    </CardContent>
                </Card>
            )}
             </div>
          </div>
          </section>
  )
}

export default Services
