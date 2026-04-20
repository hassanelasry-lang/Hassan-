import { StateCreator } from "zustand";
import { INotificationSlice } from "./store-tstore-t.ts";

export const createNotificationSlice: StateCreator<INotificationSlice> = (set) => ({
  messages: [],
  setMessage: (message: string) =>
    set((state) => ({ messages: [...state.messages, message] })),
});