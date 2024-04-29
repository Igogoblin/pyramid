import s from "./backslider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../store/cardSlice";

const BackSlider = () => {
  const back = useSelector((state) => state.pyramid.backFont);
  const dispatch = useDispatch();

  function setBackGreen() {
    dispatch(setColor(1));
  }
  function setBackWhite() {
    dispatch(setColor(0));
  }
  return (
    <div className={s.place}>
      <img
        src={back[1]}
        alt="background image"
        className={s.imageSlider1}
        onClick={setBackGreen}
      />
      <img
        src={back[0]}
        alt="background image"
        className={s.imageSlider2}
        onClick={setBackWhite}
      />
    </div>
  );
};

export default BackSlider;
