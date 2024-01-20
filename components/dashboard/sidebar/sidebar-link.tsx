import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  icon: LucideIcon;
  label: string;
  link: string;
  active: boolean;
}

const SidebarLink = ({ icon: Icon, label, link, active }: SidebarLinkProps) => {
  return (
    <div className="relative group flex items-center gap-x-2">
      <Link
        href={link}
        className={cn(
          "rounded-xl p-3 duration-200 hover:scale-110",
          active ? "bg-sky-600" : "hover:bg-sky-600"
        )}
      >
        <Icon strokeWidth={2} className="text-white h-5 w-5" />
      </Link>

      {/* tooltip */}
      <div className="hidden group-hover:inline absolute left-16 bg-sky-500 rounded-r-md shadow-md p-2 w-fit z-50">
        <p className="text-white text-sm whitespace-nowrap">{label}</p>
      </div>
    </div>
  );
};

export default SidebarLink;
