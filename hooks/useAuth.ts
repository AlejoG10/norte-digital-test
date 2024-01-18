"use client";

import { create } from "zustand";

type Auth = {
  user: string | null;
  isLoggedIn: boolean;
};

type Actions = {
  onLogin: () => void;
  onLogout: () => void;
};

export const useAuth = create<Auth & Actions>((set) => ({
  user: null,
  isLoggedIn: true,
  onLogin: () => set({ isLoggedIn: true }),
  onLogout: () => set({ isLoggedIn: false }),
}));
