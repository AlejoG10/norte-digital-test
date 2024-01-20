"use client";

import { usePathname } from "next/navigation";
import { Home, User, ShoppingCart, DollarSign } from "lucide-react";

import Brand from "@/components/navbar/brand";
import NavbarLinks from "@/components/navbar/navbar-links";
import MobileMenu from "@/components/shared/mobile-menu/mobile-menu";
import LoginBtn from "@/components/navbar/login-btn";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    {
      icon: Home,
      label: "Home",
      link: "/",
      active: pathname === "/",
    },
    {
      icon: User,
      label: "About us",
      link: "/#about",
      active: pathname === "/#about",
    },
    {
      icon: ShoppingCart,
      label: "Products",
      link: "/#products",
      active: pathname === "/#products",
    },
    {
      icon: DollarSign,
      label: "Pricing",
      link: "/#pricing",
      active: pathname === "/#pricing",
    },
  ];

  return (
    <nav className="fixed px-12 py-10 sm:px-16 sm:py-12 h-24 w-full z-40">
      <div className="relative flex justify-between items-center bg-white">
        {/* brand */}
        <Brand />

        {/* links */}
        <NavbarLinks links={links} />

        <div className="flex items-center gap-x-4">
          {/* login */}
          <LoginBtn />

          {/* mobile menu */}
          <MobileMenu menuLinks={links} outline className="lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
