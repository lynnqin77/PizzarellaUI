import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { PhoneCall } from "lucide-react";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12  text-white p-4 flex items-center justify-between  bg-primary font-rubik">
      {/* /left */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">
          <button className="hover:text-white hover:bg-primary hover: rounded-[15px] p-2 transition-colors duration-300">
            Homepage
          </button>
        </Link>
        <Link href="/menu">
          <button className="hover:text-white hover:bg-primary hover: rounded-[15px] p-2 transition-colors duration-300">
            Menu
          </button>
        </Link>
        <Link href="/">
          <button className="hover:text-white hover:bg-primary hover: rounded-[15px] p-2 transition-colors duration-300">
            Contact
          </button>
        </Link>
      </div>
      {/* //logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">
          <button className="hover:text-white hover:bg-primary hover: rounded-[15px] p-[5px] transition-colors duration-300 font-pacifico">
            Pizzarella
          </button>
        </Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>

      {/* //right */}

      <div className="hidden md:flex gap-6 justify-end items-center flex-1">
        <div className="flex">
          <PhoneCall />

          <span>555-234-456</span>
        </div>
        {!user ? (
          <Link href="/login">
            <button className="hover:text-white hover:bg-primary hover: rounded-[15px] p-2 transition-colors duration-300">
              Login
            </button>
          </Link>
        ) : (
          <Link href="/orders">Order</Link>
        )}

        <button className="hover:text-white hover:bg-primary hover: rounded-[15px] p-[4px] transition-colors duration-300">
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
