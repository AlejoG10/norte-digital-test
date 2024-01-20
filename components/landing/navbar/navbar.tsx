"use client";

import { usePathname } from "next/navigation";
import { Home, ShoppingCart, DollarSign } from "lucide-react";

import Brand from "@/components/landing/navbar/brand";
import NavbarLinks from "@/components/landing/navbar/navbar-links";
import MobileMenu from "@/components/shared/mobile-menu/mobile-menu";
import LoginBtn from "@/components/landing/navbar/login-btn";

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
    <nav className="bg-white fixed px-12 py-4 sm:px-16 w-full z-40">
      <div className="relative flex justify-between items-center">
        {/* brand */}
        <Brand />

        {/* links */}
        <NavbarLinks links={links} />

        <div className="flex items-center gap-x-2">
          {/* login */}
          <div className="flex justify-end w-fit lg:w-[185px]">
            <LoginBtn />
          </div>

          {/* mobile menu */}
          <MobileMenu menuLinks={links} outline className="lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
