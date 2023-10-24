"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always flavor",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver for you wherever you are in Seattle",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);

  //animation of the sliders
  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setCurrSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     2000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] lg:flex-row bg-second font-rubik">
      {/* textcontainer */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-primary font-bold">
        <h1
          className="text-5xl text-center uppercase p-4
           md:text-6xl xl:text-7xl md:p-10 
           )
          "
          // bg-clip-text text-transparent bg-gradient-to-t from-primary to-second
        >
          {data[currSlide].title}
        </h1>
        <button className="bg-primary text-white py-4 px-8 ">Order Now</button>
      </div>
      {/* imagecontainer */}
      <div className="w-full flex-1 relative lg:h-full opacity-90 ">
        <Image
          src={data[currSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
