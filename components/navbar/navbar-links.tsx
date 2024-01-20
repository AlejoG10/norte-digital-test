"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface NavbarLinksProps {
  links: {
    icon: LucideIcon;
    label: string;
    link: string;
    active: boolean;
  }[];
}

const NavbarLinks = ({ links }: NavbarLinksProps) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center lg:gap-x-12">
      {links.map((link) => (
        <Link key={link.link} href={link.link}>
          <p
            className={cn(
              "text-[17px] text-slate-600 hover:text-slate-800 font-light",
              link.active && "font-medium"
            )}
          >
            {link.label}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NavbarLinks;
