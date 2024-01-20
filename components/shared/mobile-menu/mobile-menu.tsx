"use client";

import { useState } from "react";
import { LucideIcon, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MenuLink from "./menu-link";
import MenuAction from "./menu-action";

interface MobileMenuProps {
  menuLinks: {
    icon: LucideIcon;
    label: string;
    link: string;
    active: boolean;
  }[];
  menuActions?: {
    icon: LucideIcon;
    label: string;
    onClick: () => void;
  }[];
  outline?: boolean;
  className: string;
}

const MobileMenu = ({
  menuLinks,
  menuActions,
  outline,
  className,
}: MobileMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={cn(className)}>
      {/* trigger */}
      <Button
        type="button"
        size="icon"
        className={cn(
          outline
            ? "bg-white hover:bg-sky-500 text-sky-500 hover:text-white border border-sky-500"
            : "bg-sky-500 hover:bg-sky-600"
        )}
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
          <MenuLink key={link.label} {...link} setState={setShowMenu} />
        ))}

        {/* actions */}
        {menuActions?.map((action) => (
          <MenuAction key={action.label} {...action} setState={setShowMenu} />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
