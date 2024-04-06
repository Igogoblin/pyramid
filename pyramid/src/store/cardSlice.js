import { createSlice } from "@reduxjs/toolkit";
import allCards from "./cards.json";

const cardSlice = createSlice({
  name: "pyramid",
  initialState: {
    cards: allCards,
  },
  reducers: {
    show(state) {
      console.log(state);
    },
  },
});

export const { show } = cardSlice.actions;
export default cardSlice.reducer;
