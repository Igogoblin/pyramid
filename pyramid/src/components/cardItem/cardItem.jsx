/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import s from "../body/body.module.css";
import {
  setForRule,
  setBodyGame,
  setBackStep,
  setBodyGameToo,
  setShowCard,
  setHint,
  setSteps,
} from "../../store/cardSlice";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const CardItem = ({ el, index, animate, bodyGame }) => {
  const card = useSelector((state) => state.pyramid);
  //const {width = 0 } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [comparison, setComparison] = useState(false);

  const dispatch = useDispatch();

  function actionCard(forCard) {
    // console.log(forCard); //обькт карты с данными
    // console.log(index); // индекс карты на поле
    // console.log(card);
    // console.log("el", el);
    // console.log(comparison);
    // console.log(animate);

    dispatch(setHint(false));
    if (
      card.forRule[card.rule[index].rule[0]] === 0 &&
      card.forRule[card.rule[index].rule[1]] === 0
    ) {
      if (forCard.point === 13) {
        setComparison(true);
        dispatch(setForRule(index));
        dispatch(setShowCard(index));
        dispatch(setSteps());
        return;
      }
      // для первоочередном взаимодействии карт с поля
      // if (card.cards[card.bodyPlay[0]].point + forCard.point) {
      //   setComparison(true);
      //   dispatch(setForRule(index));
      //   dispatch(setBackStep());
      //   dispatch(setShowCard(index));
      //   return;

      if (card.bodyPlay[0] === 99) {
        dispatch(setBodyGame(index));
        return;
      }

      if (el.point + card.cards[card.bodyPlay[0]].point === 13) {
        //dispatch(setBodyGameToo(card.bodyPlay[0]));
        setComparison(true);
        dispatch(setForRule(index));
        dispatch(setForRule(card.bodyPlay[0]));
        dispatch(setShowCard(index));
        dispatch(setSteps());

        // dispatch(setForRule(99));
        // dispatch(setBodyGameToo(-1));
      }

      if (card.rezCount >= 0) {
        if (forCard.point + card.rez[card.rezCount].point === 13) {
          setComparison(true);
          dispatch(setForRule(index));
          dispatch(setBackStep()); //для исчезания из реза внизу
          dispatch(setShowCard(index));
          dispatch(setSteps());
          dispatch(setForRule(99));
          dispatch(setBodyGameToo(-1));
          return;
        }

        dispatch(setBodyGame(99));
        return;
      }
    }
  }

  return (
    <div
      key={el.id}
      className={`${s.level} ${animate ? s.animate : ""}`}
      id={s["card"]}
      style={{
        backgroundImage:
          comparison || card.forRule[index] === 0 ? "none" : `url(${el.way})`,
        zIndex: comparison || card.forRule[index] === 0 ? 0 : 9,
        pointerEvents:
          comparison || card.forRule[index] === 0 ? "none" : "auto",

        width: windowWidth < 500 ? "55px" : `calc(80px + ${card.cardWidth}px)`,
        height:
          windowWidth < 500 ? "83px" : `calc(120px + ${card.cardHeight}px)`,
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
