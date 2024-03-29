"use client";

import { useLoginModal } from "@/hooks/useLoginModal";
import { cn } from "@/lib/utils";

interface LoginBtnProps {
  outline?: boolean;
  className?: string;
}

const LoginBtn = ({ outline, className }: LoginBtnProps) => {
  const loginModal = useLoginModal();

  return (
    <button
      className={cn(
        "p-2 w-24",
        outline
          ? "border-2 border-sky-500 hover:bg-sky-500 text-sky-500 hover:text-white font-medium rounded-2xl duration-300"
          : "bg-sky-500 hover:bg-sky-600 text-white rounded-md",
        className
      )}
      onClick={loginModal.onOpen}
    >
      Login
    </button>
  );
};

export default LoginBtn;
