import { create } from "zustand";

/**
 * useClientModal hook manages the state of the client modal
 */

// attributes of the hook
type ClientModal = {
  isOpen: boolean;
};

// methods of the hook
type Actions = {
  onOpen: () => void;
  onClose: () => void;
};

// useClientModal hook
export const useClientModal = create<ClientModal & Actions>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
