"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

interface IProps {}

const Navbar = () => {
  return (
    <nav className={`flex justify-center m-5 text-xl`}>
      <ul className="flex gap-6 font-medium ">
        <li className="inline">
          <NavLink href="/" text="Home" />
        </li>
        <li className="inline">
          <NavLink href="products" text="Products" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
