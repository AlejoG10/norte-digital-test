"use client";

import { redirect } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";
import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();

  // simulates authentication
  if (!isLoggedIn) redirect("/");

  return (
    <div className="h-screen w-screen p-4 md:p-6">
      <div className="flex flex-col gap-y-6 h-full">
        <DashboardNavbar />

        <div className="flex gap-x-12 h-full w-full">
          <Sidebar />

          {/* actual dashboard page */}
          <div className="h-full w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
