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
        "rounded-xl p-3 duration-200 hover:scale-110",
        active ? "bg-sky-600" : "hover:bg-sky-600"
      )}
    >
      <Icon strokeWidth={2} className="text-white h-5 w-5" />
    </Link>
  );
};

export default SidebarLink;
