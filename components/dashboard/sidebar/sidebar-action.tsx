import { LucideIcon } from "lucide-react";

interface SidebarActionProps {
  icon: LucideIcon;
  onClick: () => void;
}

const SidebarAction = ({ icon: Icon, onClick }: SidebarActionProps) => {
  return (
    <button
      className="hover:bg-sky-600 rounded-xl p-3 duration-200 hover:scale-110"
      onClick={onClick}
    >
      <Icon strokeWidth={2} className="text-white h-5 w-5" />
    </button>
  );
};

export default SidebarAction;
