import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center">
      <div className="relative w-8 h-8 pt-[3px]">
        <ShoppingCart />
      </div>
      <span>Cart(3)</span>
    </Link>
  );
};

export default CartIcon;
