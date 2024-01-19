"use client";

import { redirect } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";
import Sidebar from "@/components/dashboard/sidebar/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();

  // simulates authentication
  if (!isLoggedIn) redirect("/");

  return (
    <div className="h-screen w-screen p-4 md:p-6">
      <div className="flex gap-x-10 h-full w-full">
        <Sidebar />

        {/* actual dashboard page */}
        <div className="h-full max-h-screen overflow-y-scroll w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
