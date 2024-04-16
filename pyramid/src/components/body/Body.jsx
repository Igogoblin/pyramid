import BackCard from "../backCard/BackCard";
import Res from "../reset/Res";
import s from "./body.module.css";
import { useSelector } from "react-redux";

const Body = () => {
  const card = useSelector((state) => state.pyramid.cards);
  const size = useSelector((state) => state.pyramid.cardSize);

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
      </div>
    </div>
  );
};

export default Body;
