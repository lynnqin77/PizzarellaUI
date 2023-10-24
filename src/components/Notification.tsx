import React from "react";

const Notification = () => {
  return (
    <div
      className="h-8 bg-second
     text-zinc-800 italic font-rubik
      px-4 flex items-center  justify-center
      text-sm 
      md:base cursor-pointer
      hover:underline"
    >
      Free delivery for orders over $29. Order your food now!
    </div>
  );
};

export default Notification;
