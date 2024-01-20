"use client";

import { usePathname } from "next/navigation";
import {
  DollarSign,
  Home,
  LogOut,
  MapPin,
  ShoppingCart,
  User,
} from "lucide-react";
import toast from "react-hot-toast";

import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { extraBoldFont } from "@/fonts";
import MobileMenu from "@/components/shared/mobile-menu/mobile-menu";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  const { onLogout } = useAuth();
  const pathname = usePathname();

  const menuLinks = [
    {
      icon: Home,
      label: "New sale",
      link: "/dashboard/new-sale",
      active: pathname === "/dashboard/new-sale",
    },
    {
      icon: DollarSign,
      label: "Sales",
      link: "/dashboard/sales",
      active: pathname === "/dashboard/sales",
    },
    {
      icon: ShoppingCart,
      label: "Products (NOT IMPLEMENTED)",
      link: "",
      active: false,
    },
    {
      icon: User,
      label: "Users (NOT IMPLEMENTED)",
      link: "",
      active: false,
    },
    {
      icon: MapPin,
      label: "Branch offices (NOT IMPLEMENTED)",
      link: "",
      active: false,
    },
  ];

  const menuActions = [
    {
      icon: LogOut,
      label: "Log out",
      onClick: () => {
        onLogout();
        toast.success("Logged out!");
      },
    },
  ];

  return (
    <div className="flex gap-x-4 w-full">
      <div className="flex flex-col gap-y-3 w-full">
        <div className="relative flex justify-between items-center w-full">
          <h1
            className={cn(extraBoldFont.className, "text-2xl text-slate-800")}
          >
            {title}
          </h1>

          <MobileMenu
            menuLinks={menuLinks}
            menuActions={menuActions}
            className="md:hidden"
          />
        </div>
        <hr className="bg-neutral-300 w-full" />
      </div>
    </div>
  );
};

export default Heading;
