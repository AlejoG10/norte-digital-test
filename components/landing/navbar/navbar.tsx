"use client";

import Link from "next/link";

import { useLoginModal } from "@/hooks/useLoginModal";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const loginModal = useLoginModal();

  return (
    <nav className="fixed h-20 w-full">
      <div className="flex justify-end items-center gap-x-6 sm:gap-x-12 px-6 sm:px-10 h-full">
        <Link href="/#products" className="text-slate-800 hover:font-medium">
          Products
        </Link>

        <Link href="/#pricing" className="text-slate-800 hover:font-medium">
          Pricing
        </Link>

        <Button
          type="button"
          className="bg-sky-500 hover:bg-sky-600 w-32"
          onClick={loginModal.onOpen}
        >
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
