import BackCard from "../backCard/BackCard";
import Res from "../reset/Res";
import Retreat from "../retreat/Retreat";
import s from "./body.module.css";
import { useSelector } from "react-redux";

const Body = () => {
  const card = useSelector((state) => state.pyramid.cards);
  const size = useSelector((state)=>state.pyramid.cardSize);
  console.log(size);
  // console.log(card);
  // const arr = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28,
  // ];
  // 15 - 5 21 - 6  28 - 7
  // style={{ width: "10%" }}

  return (
    <div className={s.main}>
      <div className={s.area}>
        {card.map(
          (el) =>
            28 > el.id && (
              <div
                key={el.id}
                className={s.level}
                style={{
                  backgroundImage: `url(${el.way})`,
                  // width: `10%`,
                  // height: `30%`,
                  // width: "6%",
                  // height: "18%"
                  // width: "80px",
                  // height: "116px"
                  width: `calc(73px + ${size}px)`,
                  height: `calc(109px + ${size*2}px)`
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
