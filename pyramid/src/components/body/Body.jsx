import BackCard from "../backCard/BackCard";
import Res from "../reset/Res";
import s from "./body.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sortCards } from "../../store/cardSlice";
import CardItem from "../cardItem/cardItem";
import { useState } from "react";

const Body = () => {
  const card = useSelector((state) => state.pyramid.cards);
  const dispatch = useDispatch();
  const [hint, setHint] = useState(false);
  if (card[0].id === 0) {
    dispatch(sortCards());
  }
  // (hint){

  //   for(let i = 0;i<28;i++){
  //     if(card.cards[i]){
  //       if()
  //     }
  //   }
  //     }

  return (
    <div className={s.main}>
      <div className={s.area}>
        {card.map(
          (el, index) =>
            28 > index && (
              <CardItem
                key={index}
                el={el}
                index={index}
                {...(hint && { animation: "animate" })}
              />
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
