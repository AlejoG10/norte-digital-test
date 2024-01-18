"use client";

import { useEffect, useState } from "react";

import ClientModal from "@/components/modals/client-modal";

const ClientModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ClientModal />;
};

export default ClientModalProvider;
