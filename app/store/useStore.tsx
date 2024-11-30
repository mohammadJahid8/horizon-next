'use client';
import { create } from 'zustand';

type StoreState = {
  user: any;
  updateUser: (user: any) => void;
};

const useStore = create<StoreState>((set) => ({
  user: {},
  updateUser: (user: any) => set({ user }),
}));

export default useStore;
