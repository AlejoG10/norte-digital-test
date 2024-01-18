"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Home, LogOut, MapPin, Sun, User, Wallet } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import SidebarLink from "./sidebar-link";
import SidebarAction from "./sidebar-action";

const Sidebar = () => {
  const { onLogout } = useAuth();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const sidebarLinks = [
    {
      icon: Home,
      link: "/dashboard/new-sale",
      active: pathname === "/dashboard/new-sale",
    },
    {
      icon: Wallet,
      link: "/dashboard/sales",
      active: pathname === "/dashboard/sales",
    },
    {
      icon: MapPin,
      link: "/dashboard/branch-offices",
      active: pathname === "/dashboard/branch-offices",
    },
    {
      icon: User,
      link: "/dashboard/users",
      active: pathname === "/dashboard/users",
    },
  ];

  const sidebarActions = [
    {
      icon: Sun,
      onClick: () => (theme === "light" ? setTheme("dark") : setTheme("light")),
    },
    {
      icon: LogOut,
      onClick: onLogout,
    },
  ];

  return (
    <div className="bg-sky-500 rounded-lg shadow-xl p-5 w-[75px]">
      <div className="flex flex-col justify-between h-full">
        {/* links */}
        <div className="flex flex-col items-center gap-y-8">
          {sidebarLinks.map((link) => (
            <SidebarLink key={link.link} {...link} />
          ))}
        </div>

        {/* actions */}
        <div className="flex flex-col items-center gap-y-8">
          {sidebarActions.map((action, i) => (
            <SidebarAction key={i} {...action} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
