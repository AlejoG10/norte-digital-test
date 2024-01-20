import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface MenuLinkProps {
  icon: LucideIcon;
  label: string;
  link: string;
  active: boolean;
}

const MenuLink = ({ icon: Icon, link, label, active }: MenuLinkProps) => {
  return (
    <Link
      href={link}
      className={cn(
        "flex items-center gap-x-3 p-4 w-full duration-200",
        active ? "bg-sky-500 text-white" : "hover:bg-sky-500 hover:text-white"
      )}
    >
      <Icon strokeWidth={2} className="h-5 w-5" />

      <p className="text-sm">{label}</p>
    </Link>
  );
};

export default MenuLink;
