import { useEffect } from "react";
import BackCard from "../backCard/BackCard";
import Res from "../reset/Res";
import Retreat from "../retreat/Retreat";
import s from "./body.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sortCards } from "../../store/cardSlice";

const Body = () => {
  useEffect(() => {
    dispatch(sortCards());
    // dispatch(createRez());
  }, []);
  const card = useSelector((state) => state.pyramid.cards);
  const size = useSelector((state) => state.pyramid.cardSize);
  const check = useSelector((state) => state.pyramid.rez);
  const dispatch = useDispatch();

  console.log(card);
  console.log(check);
  return (
    <div className={s.main}>
      <div className={s.area}>
        {card.map(
          (el, index) =>
            28 > index && (
              <div
                key={el.id}
                className={s.level}
                style={{
                  backgroundImage: `url(${el.way})`,
                  width: `calc(49px + ${size}px)`,
                  height: `calc(75px + ${size * 2}px)`,
                }}
              ></div>
            )
        )}
      </div>
      <div className={s.basement}>
        <div className={s.deck}>
          <BackCard />
          <Res />
        </div>

        <Retreat />
      </div>
    </div>
  );
};

export default Body;
