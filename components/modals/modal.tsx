import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { boldFont } from "@/fonts";

interface ModalProps {
  title: string;
  dims: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ title, dims, onClose, children }: ModalProps) => {
  return (
    <div className="fixed bg-neutral-800/50 flex justify-center items-center h-screen w-screen z-50">
      <div className={cn("bg-white rounded-md shadow-lg w-full h-full", dims)}>
        <div
          className={cn(
            "fixed bg-white rounded-t-md flex justify-between items-center p-6 z-10 w-full h-fit",
            dims
          )}
        >
          <h1 className={cn(boldFont.className, "text-xl text-slate-800")}>
            {title}
          </h1>

          <button className="ml-auto w-fit" type="button" onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="p-6 mt-[50px]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
