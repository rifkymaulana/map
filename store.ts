import { create } from "zustand";

interface CreditCard {
  number: string;
  expiry: string;
  dob: string;
}

const store = create((set) => ({
  creditCard: {
    number: null,
    expiry: null,
    dob: null,
  },
  setCreditCard: (creditCard: CreditCard) => set({ creditCard }),
}));

export default store;