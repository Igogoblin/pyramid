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
    backFontSize:1,
  },
  reducers: {
    show(state) {
      console.log(state);
    },
//     setBackground(state,action){
// console.log(action);
//     }
  },
});

export const { show } = cardSlice.actions;
export default cardSlice.reducer;
