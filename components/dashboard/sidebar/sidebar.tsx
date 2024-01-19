"use client";

import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { DollarSign, Home, LogOut, MapPin, User } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import SidebarLink from "./sidebar-link";
import SidebarAction from "./sidebar-action";

const Sidebar = () => {
  const { onLogout } = useAuth();
  const pathname = usePathname();

  const sidebarLinks = [
    {
      icon: Home,
      link: "/dashboard/new-sale",
      active: pathname === "/dashboard/new-sale",
    },
    {
      icon: DollarSign,
      link: "/dashboard/sales",
      active: pathname === "/dashboard/sales",
    },
    {
      icon: User,
      link: "/dashboard/users",
      active: pathname === "/dashboard/users",
    },
    {
      icon: MapPin,
      link: "/dashboard/branch-offices",
      active: pathname === "/dashboard/branch-offices",
    },
  ];

  const sidebarActions = [
    {
      icon: LogOut,
      onClick: () => {
        onLogout();
        toast.success("Logged out!");
      },
    },
  ];

  return (
    <div className="hidden md:inline bg-sky-500 rounded-lg shadow-xl p-5 w-[75px]">
      <div className="flex flex-col justify-between h-full">
        {/* links */}
        <div className="flex flex-col items-center gap-y-4">
          {sidebarLinks.map((link) => (
            <SidebarLink key={link.link} {...link} />
          ))}
        </div>

        {/* actions */}
        <div className="flex flex-col items-center gap-y-4">
          {sidebarActions.map((action, i) => (
            <SidebarAction key={i} {...action} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
