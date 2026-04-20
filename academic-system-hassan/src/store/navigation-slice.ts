import { StateCreator } from "zustand";
import { INavSlice } from "./store-tstore-t.ts";

export const createNavigationSlice: StateCreator<INavSlice> = (set) => ({
  menu: [],
  setMenu: (menu) => set((state) => ({ menu })),
});