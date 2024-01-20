import { LucideIcon } from "lucide-react";

interface MenuActionProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const MenuAction = ({ icon: Icon, label, onClick }: MenuActionProps) => {
  return (
    <button
      className="flex items-center gap-x-3 p-4 w-full hover:bg-sky-500 hover:text-white"
      onClick={onClick}
    >
      <Icon strokeWidth={2} className="h-5 w-5" />

      <p className="text-sm">{label}</p>
    </button>
  );
};

export default MenuAction;
