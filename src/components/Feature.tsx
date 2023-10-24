import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="w-screen overflow-x-scroll h-screen text-primary bg-primary font-rubik flex flex-col items-center justify-center ">
      {/* //wrapper */}
      <div className="w-max flex">
        <div className=" flex ">
          {/* //singleitems */}
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="h-[60vh] w-screen 
              flex flex-col items-center justify-around
              p-4 
              md:w-[50vw]
              xl:w-[33vw]
              xl:h-[90vh]"
            >
              {/* cardcontainer */}
              <div
                className="border-2 bg-second 
                rounded-[20px]
               p-2 xl:mt-20 xl:mb-5 shadow-md 
               flex flex-col flex-grow 
               hover:scale-[1.03] hover:bg-second 
               transform transition-transform duration-300"
              >
                {/* imagecontainer */}
                {item.img && (
                  <div className="relative flex-1 w-full">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* textcontainer */}
                <div className="flex-1 flex flex-col gap-4 items-center text-center">
                  <h1 className="text-xl font-bold uppercase mt-4 xl:text-2xl ">
                    {item.title}
                  </h1>
                  <p className="p-4 xl:p-8">{item.desc}</p>
                  <span className="text-xl font-bold xl:text-3xl">
                    ${item.price}
                  </span>
                  <button className="bg-primary text-white p-2 rounded-[10px]">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-white mb-4 mt-2">Scoll right to see more </p>
    </div>
  );
};

export default Feature;
