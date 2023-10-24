import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div
      className="h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] 
    flex flex-col font-rubik 
    lg:flex-row"
    >
      {/* productcontainer */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* singleitem containter */}
        <div className="flex items-center justify-between mx-4 mb-4 ">
          <Image
            src="/temporary/p1.png"
            width={100}
            height={100}
            alt=""
            className=""
          />
          <div>
            <h1 className="uppercase font-bold text-xl">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$49.49</h2>
          <span>
            <X className="text-primary cursor-pointer" />
          </span>
        </div>
        {/* singleitem containter */}
        <div className="flex items-center justify-between mx-4 mb-4 ">
          <Image
            src="/temporary/p1.png"
            width={100}
            height={100}
            alt=""
            className=""
          />
          <div>
            <h1 className="uppercase font-bold text-xl">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$49.49</h2>
          <span>
            <X className="text-primary cursor-pointer" />
          </span>
        </div>
        {/* singleitem containter */}
        <div className="flex items-center justify-between mx-4 mb-4 ">
          <Image
            src="/temporary/p1.png"
            width={100}
            height={100}
            alt=""
            className=""
          />
          <div>
            <h1 className="uppercase font-bold text-xl">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$49.49</h2>
          <span>
            <X className="text-primary cursor-pointer" />
          </span>
        </div>
      </div>
      {/* paymentcontainer; */}
      <div className="h-1/2 p-4  bg-second flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal(3 items)</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between">
          <span>Service Fee</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span className="text-green-600">Free</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>Total Cost</span>
          <span className="font-bold">$81.82</span>
        </div>
        <button className="p-3 my-3 bg-primary text-white rounded-[10px] w-1/2 self-end lg:w-full">
          Check out
        </button>
      </div>
    </div>
  );
};

export default CartPage;
