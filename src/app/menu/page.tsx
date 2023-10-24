import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div
      className="p-4 h-[calc(100vh-3rem)] 
    flex flex-col items-center font-rubik
    md:h-[calc(100vh-6rem)]  md:flex-row  
    lg:px-20 xl:px-20 "
    >
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2
          lg:h-2/3"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button
              className={`hidden 2xl:block text-primary text-${
                category.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-[10px]`}
              style={{ backgroundColor: category.color }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
