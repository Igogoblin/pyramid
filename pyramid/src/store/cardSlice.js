import { createSlice } from "@reduxjs/toolkit";
import allCards from "./cards.json";

const cardSlice = createSlice({
  name: "pyramid",
  initialState: {
    cards: allCards,
    backFont: [
      "/pyramid/src/assets/backgrounds/clouds.jpg",
      "/pyramid/src/assets/backgrounds/default.jpg",
      "/pyramid/src/assets/backgrounds/flowers.jpg",
      "/pyramid/src/assets/backgrounds/flowers-field.jpg",
      "/pyramid/src/assets/backgrounds/sand.jpg",
      "/pyramid/src/assets/backgrounds/sea.jpg",
      "/pyramid/src/assets/backgrounds/space.jpg",
      "/pyramid/src/assets/backgrounds/sunflower.jpg",
    ],
    cardSize: 0,
    rez: [],
    colors: 1,
  },
  reducers: {
    setSize(state, action) {
      let size = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8];

      state.cardSize = size[action.payload];
    },
    setColor(state, action) {
      state.colors = action.payload;
    },
  },
});

export const { show, setSize, setColor } = cardSlice.actions;
export default cardSlice.reducer;
