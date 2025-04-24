import { create } from 'zustand';

export const useSearchStore = create((set) => ({
  query: '',
  setQuery: (q) => set({ query: q }),
  clearQuery: () => set({ query: '' }),
}));
