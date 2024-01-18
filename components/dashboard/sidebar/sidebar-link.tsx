import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  icon: LucideIcon;
  link: string;
  active: boolean;
}

const SidebarLink = ({ icon: Icon, link, active }: SidebarLinkProps) => {
  return (
    <Link
      href={link}
      className={cn(
        "duration-200 hover:scale-110",
        active && "bg-sky-600 p-3 rounded-xl"
      )}
    >
      <Icon className={cn("text-white h-6 w-6")} />
    </Link>
  );
};

export default SidebarLink;
