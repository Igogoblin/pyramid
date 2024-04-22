import BackCard from "../backCard/BackCard";
import Res from "../reset/Res";
import s from "./body.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sortCards } from "../../store/cardSlice";
import CardItem from "../cardItem/cardItem";

const Body = () => {
  const card = useSelector((state) => state.pyramid.cards);
  // const size = useSelector((state) => state.pyramid.cardSize);
  const dispatch = useDispatch();
  if (card[0].id === 0) {
    dispatch(sortCards());
  }
  // function actionCard(index) {
  //   console.log(index);
  //   dispatch(getCard(index));
  // }

  return (
    <div className={s.main}>
      <div className={s.area}>
        {card.map(
          (el, index) =>
            28 > index && (
              // <div
              //   key={el.id}
              //   className={s.level}
              //   style={{
              //     backgroundImage: `url(${el.way})`,
              //     width: `calc(49px + ${size}px)`,
              //     height: `calc(75px + ${size * 2}px)`,
              //   }}
              //   onClick={actionCard(index)}
              // ></div>
              <CardItem key={index} el={el} index={index} />
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
