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
    cardSize:0,
  },
  reducers: {
    show(state) {
      console.log(state);
    },
setSize(state,action){
  let size = [-5,-4,-3,-2,-1,0,1,2,3,4];

  console.log(action);
  state.cardSize=size[action.payload];
}
  },
});

export const { show, setSize } = cardSlice.actions;
export default cardSlice.reducer;
