import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-second h-screen flex flex-col md:flex-row font-rubik md:justify-between md:">
      {/* textcontainer */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-primary text-5xl font-bold xl:text-8xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-primary xl:text-xl mb-4">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        {/* set a countdown for the offer */}
        <p className="text-primary text-2xl xl:text-xl">
          Your offer will expire in
        </p>
        <CountDown />
        <button className="bg-primary text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      {/* imagecontainer */}
      <div className="flex-1 w-full relative md:h-full">
        <Image
          src="/offerProduct.png"
          alt="Offer Product"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
