"use client";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 1, title: "Working hours", url: "/" },
  { id: 1, title: "Contact", url: "/" },
];

const Menu = () => {
  const user = false;
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <MenuIcon onClick={() => setOpen(true)} />
      ) : (
        <X onClick={() => setOpen(false)} />
      )}

      {open && (
        <div
          className="
        bg-[#E25E3E]
         text-white 
         absolute left-0 top-[3rem] w-full h-[calc(100vh-5rem)]
          flex flex-col gap-8 items-center justify-center z-10"
        >
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/Orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
