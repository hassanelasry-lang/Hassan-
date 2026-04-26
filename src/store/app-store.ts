import { createStore } from "zustand";
import { createNavigationSlice } from "./navigation-slice";
import { INavSlice, INotificationSlice } from "./store-tstore-t.ts";
import { createNotificationSlice } from "./notification-slice";


export type IStoreState = INotificationSlice & INavSlice;

export const appStore = () =>
  createStore<IStoreState>()((...a) => ({
    ...createNotificationSlice(...a),
    ...createNavigationSlice(...a),
  }));