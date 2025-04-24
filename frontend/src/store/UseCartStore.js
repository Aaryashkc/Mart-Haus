import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  addItem: (item) => {
    const existing = get().items.find(i => i.id === item.id);
    if (existing) {
      set({
        items: get().items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
        )
      });
    } else {
      set({ items: [...get().items, { ...item, quantity: item.quantity || 1 }] });
    }
  },
  removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
  updateQuantity: (id, quantity) => set({
    items: get().items.map(i => (i.id === id ? { ...i, quantity } : i))
  }),
  clearCart: () => set({ items: [] })
}));
