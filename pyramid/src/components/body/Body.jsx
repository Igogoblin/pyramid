import BackCard from "../backCard/BackCard";
import Res from "../reset/Res";
import Retreat from "../retreat/Retreat";
import s from "./body.module.css";

const Body = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];
  // 15 - 5 21 - 6  28 - 7
  // style={{ width: "10%" }}
  return (
    <div className={s.main}>
      <div className={s.area}>
        {arr.map((el) => (
          <div key={el} className={s.level}>
            {el}
          </div>
        ))}
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
