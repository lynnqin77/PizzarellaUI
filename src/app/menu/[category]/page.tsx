import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-primary font-rubik">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-primary sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group hover:bg-second"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* imagecontainer */}
          {item.img && (
            <div className="relative h-[70%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* textcontainer */}
          <div className="flex items-center justify-between font-bold ">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-primary text-white p-2 rounded-md">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
