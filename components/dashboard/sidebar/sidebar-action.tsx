import { LucideIcon } from "lucide-react";

interface SidebarActionProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const SidebarAction = ({ icon: Icon, label, onClick }: SidebarActionProps) => {
  return (
    <div className="relative group flex items-center gap-x-2">
      <button
        className="hover:bg-sky-600 rounded-xl p-3 duration-200 hover:scale-110"
        onClick={onClick}
      >
        <Icon strokeWidth={2} className="text-white h-5 w-5" />
      </button>

      {/* tooltip */}
      <div className="hidden group-hover:inline absolute left-16 bg-sky-500 rounded-r-md shadow-md p-2 w-fit z-50">
        <p className="text-white text-sm whitespace-nowrap">{label}</p>
      </div>
    </div>
  );
};

export default SidebarAction;
