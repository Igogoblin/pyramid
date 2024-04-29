import BackCard from "../backCard/BackCard";
import Res from "../reset/Res";
import s from "./body.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setBodyGameToo, sortCards } from "../../store/cardSlice";
import CardItem from "../cardItem/cardItem";

const Body = () => {
  const card = useSelector((state) => state.pyramid);
  const dispatch = useDispatch();
  if (card.cards[0].id === 0) {
    dispatch(sortCards());
  }

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
      // ----------------------------------------------
      let ourArr = card.cards.filter((i, ind) => {
        if (ind < 28) {
          if (
            card.forRule[card.rule[ind].rule[0]] === 0 &&
            card.forRule[card.rule[ind].rule[1]] === 0 &&
            i.show === true
          ) {
            return true;
          }
        }
        return false;
      });
      console.log(ourArr);
      //----------------------------------------------------
      const findAllIndices = (arr) => {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (
              arr[j].point + arr[i].point === 13 &&
              card.cards[index].show === true
            ) {
              result.push(arr[i].id);
              result.push(arr[j].id);
            }
          }
        }
        console.log(result);
        return result;
      };
      return findAllIndices(ourArr).some((element) => element === forCard.id)
        ? true
        : false;
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
                animate={checkHint(index, el) && card.hint}
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
