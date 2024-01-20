"use client";

import { useEffect, useState } from "react";

import LoginModal from "../modals/login-modal";

const LoginModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <LoginModal />;
};

export default LoginModalProvider;
