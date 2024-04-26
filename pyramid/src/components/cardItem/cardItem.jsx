/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import s from "../body/body.module.css";
import {
  setForRule,
  setBodyGame,
  setBackStep,
  setBodyGameToo,
} from "../../store/cardSlice";
import PropTypes from "prop-types";
import { useState } from "react";

const CardItem = ({ el, index, animate, bodyGame }) => {
  const card = useSelector((state) => state.pyramid);

  const [comparison, setComparison] = useState(false);
  //

  const dispatch = useDispatch();

  function actionCard(forCard) {
    console.log(forCard); //обькт карты с данными
    console.log(index); // индекс карты на поле
    console.log(card);
    console.log("el", el);
    // console.log(comparison);
    // console.log(animate);
    if (
      card.forRule[card.rule[index].rule[0]] === 0 &&
      card.forRule[card.rule[index].rule[1]] === 0
    ) {
      if (forCard.point === 13) {
        setComparison(true);
        dispatch(setForRule(index));
        return;
      }
      if (card.rezCount >= 0) {
        if (forCard.point + card.rez[card.rezCount].point === 13) {
          setComparison(true);
          dispatch(setForRule(index));
          dispatch(setBackStep());
          return;
        }
      }
      if (card.bodyPlay[0] === 29) {
        dispatch(setBodyGame(index));
        return;
      }
      if (card.bodyPlay[0] < 29) {
        if (el.point + card.cards[card.bodyPlay[0]].point === 13) {
          dispatch(setBodyGameToo(card.bodyPlay[0]));
          setComparison(true);
          dispatch(setForRule(index));
          dispatch(setForRule(card.bodyPlay[0]));
        }

        dispatch(setBodyGame(29));
        return;
      }
    }
  }

  return (
    <div
      key={el.id}
      className={`${s.level} ${animate ? s.animate : ""}`}
      style={{
        backgroundImage:
          comparison || card.forRule[index] === 0 ? "none" : `url(${el.way})`,
        zIndex: comparison || card.forRule[index] === 0 ? 0 : 9,
        pointerEvents:
          comparison || card.forRule[index] === 0 ? "none" : "auto",
        width: `calc(49px + ${card.cardSize}px)`,
        height: `calc(75px + ${card.cardSize * 2}px)`,
        transform: bodyGame ? "scale(1.2)" : "scale(1)",
      }}
      onClick={() => actionCard(el)}
    ></div>
  );
};

export default CardItem;

CardItem.propTypes = {
  el: PropTypes.object.isRequired, // Пропc `element` должен быть obj и обязательным
  index: PropTypes.number.isRequired, // Пропc `index` должен быть числом и обязательным
  // animate: PropTypes.boolean.isRequired,
};
