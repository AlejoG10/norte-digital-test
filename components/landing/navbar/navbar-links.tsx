"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavbarLinksProps {
  links: {
    icon: LucideIcon;
    label: string;
    link: string;
    active: boolean;
  }[];
}

const NavbarLinks = ({ links }: NavbarLinksProps) => {
  return (
    <div className="hidden lg:flex items-center lg:gap-x-12">
      {links.map((link) => (
        <Link key={link.link} href={link.link}>
          <p className="text-[17px] text-slate-600 hover:text-slate-800 font-base">
            {link.label}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NavbarLinks;
