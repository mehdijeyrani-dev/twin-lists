import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UIStore {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  setIsCollapsed: (value: boolean) => void;
}

export const useUIStore = create<UIStore>()(
  persist(
    (set) => ({
      isCollapsed: false,
      toggleCollapsed: () =>
        set((state) => ({ isCollapsed: !state.isCollapsed })),
      setIsCollapsed: (value) => set({ isCollapsed: value }),
    }),
    {
      name: "sidebar-state",
      partialize: (state) => ({ isCollapsed: state.isCollapsed }),
    },
  ),
);
