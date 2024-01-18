import { LucideIcon } from "lucide-react";
import React from "react";

interface SidebarActionProps {
  icon: LucideIcon;
  onClick: () => void;
}

const SidebarAction = ({ icon: Icon, onClick }: SidebarActionProps) => {
  return (
    <button className="duration-200 hover:scale-110" onClick={onClick}>
      <Icon className="text-white h-6 w-6" />
    </button>
  );
};

export default SidebarAction;
