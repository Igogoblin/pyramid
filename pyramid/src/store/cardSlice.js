import { createSlice } from "@reduxjs/toolkit";
import allCards from "./cards.json";
import rule from "./rule.json";

const cardSlice = createSlice({
  name: "pyramid",

  initialState: {
    cards:
      localStorage.getItem("restartPyramidTrue") == "true"
        ? JSON.parse(localStorage.getItem("restartPyramid"))
        : allCards,
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
    backs: [
      "/pyramid/src/assets/card_backs/card-cover-1.png",
      "/pyramid/src/assets/card_backs/card-cover-2.png",
      "/pyramid/src/assets/card_backs/card-cover-3.png",
      "/pyramid/src/assets/card_backs/card-cover-4.png",
      "/pyramid/src/assets/card_backs/card-cover-5.svg",
    ],
    cardSize: 0,
    rez:
      localStorage.getItem("stepTrue") == "true"
        ? JSON.parse(
            localStorage.getItem(`step${localStorage.getItem("steps")}`)
          ).rez
        : [], // это наша стопка на столе под "рубашкой" //
    rezCount:
      localStorage.getItem("stepTrue") == "true"
        ? JSON.parse(
            localStorage.getItem(`step${localStorage.getItem("steps")}`)
          ).rezCount
        : -1, //
    otb:
      localStorage.getItem("stepTrue") == "true"
        ? JSON.parse(
            localStorage.getItem(`step${localStorage.getItem("steps")}`)
          ).otb
        : [], // это стопка которая под картой которая сейчас играет //
    rule: rule[0],
    forRule:
      localStorage.getItem("stepTrue") == "true"
        ? JSON.parse(
            localStorage.getItem(`step${localStorage.getItem("steps")}`)
          ).forRule
        : rule[1], //
    colors: localStorage.getItem("bgcolor")
      ? JSON.parse(localStorage.getItem("bgcolor"))
      : 1,
    hint: false,
    bodyPlay: [29, -1],
    doBack: false,
    backCard: localStorage.getItem("backCard")
      ? JSON.parse(localStorage.getItem("backCard"))
      : 0, //
    steps:
      localStorage.getItem("stepTrue") == "true"
        ? JSON.parse(
            localStorage.getItem(`step${localStorage.getItem("steps")}`)
          ).steps
        : 0, //
    backStep: false,
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
      localStorage.setItem("bgcolor", JSON.stringify(action.payload));
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
    setCardBackIndex(state, action) {
      state.backCard = action.payload;
      localStorage.setItem("backCard", JSON.stringify(action.payload));
    },
    setSteps(state) {
      state.steps = state.steps + 1;

      localStorage.setItem(`step${state.steps}`, JSON.stringify(state));
    },
    stepBack(state) {
      state.steps = state.steps - 1;
      state.backStep = true;

      console.log(
        JSON.parse(localStorage.getItem(`step${localStorage.getItem("steps")}`))
          .rezCount
      );

      // const rezult = JSON.parse(localStorage.getItem(`step${step}`));
      // console.log(rezult);

      // state = rezult;
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
  setCardBackIndex,
  setSteps,
  stepBack,
} = cardSlice.actions;

export default cardSlice.reducer;
