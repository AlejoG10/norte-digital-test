import { create } from "zustand";

/**
 * useLoginModal hook manages the state of the login modal
 */

// attributes of the hook
type LoginModal = {
  isOpen: boolean;
};

// methods of the hook
type Actions = {
  onOpen: () => void;
  onClose: () => void;
};

// useLoginModal hook
export const useLoginModal = create<LoginModal & Actions>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
