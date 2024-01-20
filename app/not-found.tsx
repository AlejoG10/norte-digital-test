"use client";

import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

const NotFount = () => {
  const auth = useAuth();

  // redirects the user to a known URL when the URL was not found
  auth ? redirect("/dashboard/new-sale") : redirect("/");
};

export default NotFount;
