import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { boldFont } from "@/fonts";

interface ModalProps {
  isOpen?: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bg-neutral-800/50 flex justify-center items-center h-screen w-screen z-50">
      <div
        className={cn(
          "flex flex-col max-h-[400px] w-[450px]",
          isOpen
            ? "animate-modal-down"
            : "transition -translate-y-[600px] duration-500"
        )}
      >
        <div className="bg-white rounded-t-md border-t shadow-lg flex justify-between items-center p-6 h-20">
          <h1 className={cn(boldFont.className, "text-xl text-slate-800")}>
            {title}
          </h1>

          <button className="ml-auto w-fit" type="button" onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="bg-white rounded-b-md shadow-lg border-x border-b px-6 pb-6 w-full h-full overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
