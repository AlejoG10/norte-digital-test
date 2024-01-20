"use client";

import { redirect, usePathname } from "next/navigation";
import toast from "react-hot-toast";
import {
  DollarSign,
  Home,
  LogOut,
  MapPin,
  ShoppingCart,
  User,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import SidebarLink from "./sidebar-link";
import SidebarAction from "./sidebar-action";

const Sidebar = () => {
  const { onLogout } = useAuth();
  const pathname = usePathname();

  const sidebarLinks = [
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

  const sidebarActions = [
    {
      icon: LogOut,
      label: "Logout",
      onClick: () => {
        onLogout();
        toast.success("Logged out!");
      },
    },
  ];

  return (
    <div className="hidden md:inline bg-sky-500 rounded-lg shadow-xl p-5 h-full min-h-[500px] w-[75px]">
      <div className="flex flex-col justify-between h-full">
        {/* links */}
        <div className="flex flex-col items-center gap-y-5">
          {sidebarLinks.map((link) => (
            <SidebarLink key={link.label} {...link} />
          ))}
        </div>

        {/* actions */}
        <div className="flex flex-col items-center gap-y-4">
          {sidebarActions.map((action) => (
            <SidebarAction key={action.label} {...action} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
