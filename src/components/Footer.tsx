import { Copyright } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-8 md:h-20 p-4 lg:px-20 xl:px-40 text-second bg-primary flex items-center justify-between">
      <Link href="/" className="font-pacifico text-xl">
        Pizzarella
      </Link>
      <p className="flex gap-1 items-center font-rubik text-xs md:text-lg">
        <Copyright className="w-3 h-4 " />
        ALL RIGHTS RESERVED. Lynn
      </p>
    </div>
  );
};

export default Footer;
