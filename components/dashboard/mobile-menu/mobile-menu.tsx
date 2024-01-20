"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import {
  DollarSign,
  Home,
  LogOut,
  MapPin,
  Menu,
  ShoppingCart,
  User,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MenuLink from "./menu-link";
import MenuAction from "./menu-action";

const MobileMenu = () => {
  const { onLogout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const pathname = usePathname();

  const menuRef = useRef<any>(null);

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
        setShowMenu(false);
        toast.success("Logged out!");
      },
    },
  ];

  return (
    <div className="md:hidden" ref={menuRef}>
      {/* trigger */}
      <Button
        type="button"
        size="icon"
        className="bg-sky-500 hover:bg-sky-600"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <Menu />
      </Button>

      {/* menu */}
      <div
        className={cn(
          "bg-white absolute left-0 top-[73px] flex flex-col gap-y-1 rounded-md border shadow-md py-4 w-full h-fit z-50",
          showMenu
            ? "animate-menu-down"
            : "transition -translate-y-[550px] duration-500"
        )}
      >
        {/* links */}
        {menuLinks.map((link) => (
          <MenuLink key={link.label} {...link} />
        ))}

        {/* actions */}
        {menuActions.map((action) => (
          <MenuAction key={action.label} {...action} />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
