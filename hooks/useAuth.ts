"use client";

import { create } from "zustand";

/**
 * useAuth hook simulates authentication locally
 */

// attributes of the hook
type Auth = {
  user: string | null;
  isLoggedIn: boolean;
};

// methods of the hook
type Actions = {
  onLogin: () => void;
  onLogout: () => void;
};

// useAuth hook
export const useAuth = create<Auth & Actions>((set) => ({
  user: null,
  isLoggedIn: false,
  onLogin: () => set({ isLoggedIn: true }),
  onLogout: () => set({ isLoggedIn: false }),
}));
