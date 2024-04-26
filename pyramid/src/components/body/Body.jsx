import BackCard from "../backCard/BackCard";
import Res from "../reset/Res";
import s from "./body.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setBodyGameToo, sortCards } from "../../store/cardSlice";
import CardItem from "../cardItem/cardItem";
import { useState } from "react";

const Body = () => {
  const card = useSelector((state) => state.pyramid);
  const [hint] = useState(card.hint);

  // if (card.hint === true) {
  //   console.log("srabotalo!!!!!!!!!!!!!!!!!");
  // }
  const dispatch = useDispatch();
  if (card.cards[0].id === 0) {
    dispatch(sortCards());
  }
  /* здесь передаем обьект когда словим того кто должен */
  const checkHint = (index, forCard) => {
    if (
      card.forRule[card.rule[index].rule[0]] === 0 &&
      card.forRule[card.rule[index].rule[1]] === 0
    ) {
      if (forCard.point === 13) {
        return true;
      }
      if (card.rezCount >= 0) {
        if (forCard.point + card.rez[card.rezCount].point === 13) {
          return true;
        }
      }
    }
    return false;
  };

  const checkPlay = (index) => {
    if (card.bodyPlay[0] === index) {
      dispatch(setBodyGameToo(-1));
      return true;
    }
    return false;
  };

  return (
    <div className={s.main}>
      <div className={s.area}>
        {card.cards.map(
          (el, index) =>
            28 > index && (
              <CardItem
                key={index}
                el={el}
                index={index}
                animate={checkHint(index, el) && hint ? true : false}
                bodyGame={checkPlay(index)}
              ></CardItem>
            )
        )}
      </div>
      <div className={s.basement}>
        <div className={s.deck}>
          <BackCard />
          <Res />
        </div>
      </div>
    </div>
  );
};

export default Body;
