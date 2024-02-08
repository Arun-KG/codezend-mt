import { createSlice } from "@reduxjs/toolkit";

interface sliceType {
  size: { title: string; value: number }[];
  tickets: number;
  total: number;
  balance: number;
  orders: {
    id: string;
    date: string;
    size: number;
    count: number;
    prize: number;
  }[];
}

const initialState: sliceType = {
  size: [
    { title: "Small - QAR 25", value: 25 },
    { title: "Medium - QAR 50", value: 50 },
    { title: "Large - QAR 100", value: 100 },
  ],
  tickets: 1,
  total: 0,
  balance: 9200,
  orders: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementTickets: (state) => {
      state.tickets += 1;
    },
    decrementTickets: (state) => {
      state.tickets -= 1;
    },
    decremenTotalBy: (state, action) => {
      state.total -= action.payload;
      state.balance += action.payload;
    },
    incrementTotalBy: (state, action) => {
      state.total += action.payload;
      state.balance -= action.payload;
    },
    pushTocart: (state, action) => {
      state.orders.push(action.payload);
    },
    deleteFromcart: (state, action) => {
      state.orders = state.orders.filter(
        (item, index) => item.id !== action.payload
      );
    },
  },
});

export const {
  incrementTickets,
  decrementTickets,
  decremenTotalBy,
  incrementTotalBy,
  pushTocart,
  deleteFromcart,
} = cartSlice.actions;
export default cartSlice.reducer;
