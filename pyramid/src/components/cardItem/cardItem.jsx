import { useDispatch, useSelector } from "react-redux";
import s from "../body/body.module.css";
import { setForRule } from "../../store/cardSlice";
import PropTypes from "prop-types";
import { useState } from "react";

const CardItem = ({ el, index, animate }) => {
  const card = useSelector((state) => state.pyramid);

  const [comparison, setComparison] = useState(false);

  const dispatch = useDispatch();

  function actionCard(forCard) {
    console.log(forCard); //обькт карты с данными
    console.log(index); // индекс карты на поле
    console.log(card);
    console.log(comparison);

    if (
      card.forRule[card.rule[index].rule[0]] === 0 &&
      card.forRule[card.rule[index].rule[1]] === 0
    ) {
      if (forCard.point === 13) {
        setComparison(true);
        dispatch(setForRule(index));
      }
      if (card.rezCount >= 0) {
        if (forCard.point + card.rez[card.rezCount].point === 13) {
          setComparison(true);
          dispatch(setForRule(index));
        }
      }
    }
  }

  return (
    <div
      key={el.id}
      className={`${s.level} ${animate ? s.animate : ""}`}
      style={{
        backgroundImage: comparison ? "none" : `url(${el.way})`,
        //  pointerEvents: comparison ? "none" : "",
        zIndex: comparison ? 0 : 10,
        width: `calc(49px + ${card.cardSize}px)`,
        height: `calc(75px + ${card.cardSize * 2}px)`,
      }}
      onClick={() => actionCard(el)}
    ></div>
  );
};

export default CardItem;

CardItem.propTypes = {
  el: PropTypes.object.isRequired, // Пропc `element` должен быть obj и обязательным
  index: PropTypes.number.isRequired, // Пропc `index` должен быть числом и обязательным
};
