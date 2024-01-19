"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { DollarSign, Home, LogOut, MapPin, Menu, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
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
      icon: User,
      label: "Users",
      link: "/dashboard/users",
      active: pathname === "/dashboard/users",
    },
    {
      icon: MapPin,
      label: "Branch offices",
      link: "/dashboard/branch-offices",
      active: pathname === "/dashboard/branch-offices",
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

  const onWindowClick = (e: Event) => {
    const target = e.target;

    const menuCurr = menuRef.current;

    if (menuCurr && !menuCurr.contains(target)) {
      e.preventDefault();
      e.stopPropagation();
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => window.removeEventListener("click", onWindowClick);
  }, []);

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
      {showMenu && (
        <div className="bg-white absolute left-0 top-[75px] flex flex-col gap-y-1 rounded-md border shadow-md py-4 w-full h-fit z-50">
          {/* links */}
          {menuLinks.map((link) => (
            <MenuLink key={link.label} {...link} />
          ))}

          {/* actions */}
          {menuActions.map((action) => (
            <MenuAction key={action.label} {...action} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
