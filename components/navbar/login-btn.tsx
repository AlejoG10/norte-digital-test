"use client";

import { useLoginModal } from "@/hooks/useLoginModal";
import { cn } from "@/lib/utils";

interface LoginBtnProps {
  outline?: boolean;
}

const LoginBtn = ({ outline }: LoginBtnProps) => {
  const loginModal = useLoginModal();

  return (
    <div className="flex justify-end w-fit lg:w-[185px]">
      <button
        className={cn(
          "p-2 w-24",
          outline
            ? "border-2 border-sky-500 hover:bg-sky-500 text-sky-500 hover:text-white font-medium rounded-2xl duration-300"
            : "bg-sky-500 hover:bg-sky-600 text-white rounded-md"
        )}
        onClick={loginModal.onOpen}
      >
        Login
      </button>
    </div>
  );
};

export default LoginBtn;
