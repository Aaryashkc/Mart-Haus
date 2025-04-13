import {create} from 'zustand';
export const useAuthStore = create((set, get) => ({
  authUser: true,
  isSigningUp: false,
  isLoggingIn: false,
  setAuthUser: (user) => set({ authUser: user }),
}));