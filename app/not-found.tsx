"use client";

import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

const NotFount = () => {
  const auth = useAuth();
  auth ? redirect("/dashboard/new-sale") : redirect("/");
};

export default NotFount;
