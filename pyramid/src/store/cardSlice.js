import { createSlice } from "@reduxjs/toolkit";
import allCards from "./cards.json";
import rule from "./rule.json";

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
    rez: [], // это наша стопка на столе под "рубашкой"
    rezCount: -1,
    otb: [], // это стопка которая под картой которая сейчас играет
    rule: rule[0],
    forRule: rule[1],
    colors: 1,
    hint: false,
  },
  reducers: {
    setSize(state, action) {
      let size = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8];

      state.cardSize = size[action.payload];
    },
    sortCards(state) {
      state.cards = state.cards.sort(() => Math.random() - 0.5);
    },
    createRez(state) {
      if (state.rezCount === -1) {
        state.cards.forEach((el, index) => {
          if (index > 27) {
            state.rez.push(el);
          }
        });
      }
    },
    showRez(state) {
      state.rezCount++;
      // state.rez.push(state.rez[state.rezCount]);
    },
    createOtb(state) {
      state.otb.push(state.rez[state.rezCount]);
    },
    setColor(state, action) {
      state.colors = action.payload;
    },
    moveBack(state) {
      if (state.rezCount > 0) {
        state.rezCount--;
      }
    },
    // createRule(state) {
    //   if (state.rezCount === -1) {
    //     state.forRule = new Array(24).fill(1);
    //   }
    //   это нужно для заполнения дляПравила массива всеми 1, если понадобится!!!
    // },
    // checkRule(state) {},
    setForRule(state, action) {
      const updateForRule = [...state.forRule];
      console.log(updateForRule);
      updateForRule[action.payload] = 0;
      console.log(updateForRule[action.payload], action.payload);
      console.log(updateForRule);
      return {
        ...state,
        forRule: updateForRule,
      };
    },
    setHint(state) {
      state.hint = true;
    },
  },
});

export const {
  sortCards,
  setSize,
  createRez,
  showRez,
  createOtb,
  setColor,
  moveBack,
  // createRule,
  setForRule,
  setHint,
} = cardSlice.actions;

export default cardSlice.reducer;
