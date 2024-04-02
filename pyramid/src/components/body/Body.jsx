import s from "./body.module.css";

const Body = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // 15 - 5 21 - 6  28 - 7
  return (
    <div className={s.area}>
      {arr.map((el) => (
        <div key={el} className={s.level}>
          {el}
        </div>
      ))}
    </div>
  );
};

export default Body;
