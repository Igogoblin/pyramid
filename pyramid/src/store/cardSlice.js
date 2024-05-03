import { createSlice } from "@reduxjs/toolkit";
// import allCards from "./cards.json";
import allCards from "./cards";
import twoPart from "./twoPart";
import rule from "./rule.json";
import clouds from "../assets/backgrounds/clouds.jpg";
import flowers from "../assets/backgrounds/flowers.jpg";
import osnova from "../assets/backgrounds/default.jpg";
import flowersField from "../assets/backgrounds/flowers-field.jpg";
import sand from "../assets/backgrounds/sand.jpg";
import sea from "../assets/backgrounds/sea.jpg";
import space from "../assets/backgrounds/space.jpg";
import sunflower from "../assets/backgrounds/sunflower.jpg";
import cardCover1 from "../assets/card_backs/card-cover-1.png";
import cardCover2 from "../assets/card_backs/card-cover-2.png";
import cardCover3 from "../assets/card_backs/card-cover-3.png";
import cardCover4 from "../assets/card_backs/card-cover-4.png";
import cardCover5 from "../assets/card_backs/card-cover-5.svg";

const cardSlice = createSlice({
  name: "pyramid",
  initialState: {
    cards: [...allCards, ...twoPart],
    backFont: [
      clouds,
      osnova,
      flowers,
      flowersField,
      sand,
      sea,
      space,
      sunflower,
    ],
    backs: [cardCover1, cardCover2, cardCover3, cardCover4, cardCover5],
    cardSize: 0,
    rez: [], // это наша стопка на столе под "рубашкой"
    rezCount: -1,
    otb: [], // это стопка которая под картой которая сейчас играет
    rule: rule[0],
    forRule: rule[1],
    colors: 1,
    hint: false,
    bodyPlay: [29, -1],
    doBack: false,
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
      if (state.rezCount === 23) {
        state.rezCount = -1;
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
        // state.rezCount--; // after memory !!!
      }
    },
    // createRule(state) {
    //   if (state.rezCount === -1) {
    //     state.forRule = new Array(28).fill(1);
    //   }
    //   это нужно для заполнения дляПравила массива всеми 1, если понадобится!!!
    // },
    // checkRule(state) {},
    setForRule(state, action) {
      const updateForRule = [...state.forRule];
      updateForRule[action.payload] = 0;
      return {
        ...state,
        forRule: updateForRule,
      };
    },
    setHint(state, action) {
      state.hint = action.payload;
    },
    setOtb(state) {
      state.otb.push(state.rez[state.rezCount]);
    },
    setBodyGame(state, action) {
      state.bodyPlay[0] = action.payload;
    },
    setBodyGameToo(state, action) {
      state.bodyPlay[1] = action.payload;
    },
    setBackStep(state) {
      state.doBack = true;
    },
    setBackStepNorm(state) {
      state.doBack = false;
    },
    setShowCard(state, action) {
      state.cards[action.payload].show = false;
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
  setOtb,
  setBodyGame,
  setBodyGameToo,
  setBackStep,
  setBackStepNorm,
  setShowCard,
} = cardSlice.actions;

export default cardSlice.reducer;
