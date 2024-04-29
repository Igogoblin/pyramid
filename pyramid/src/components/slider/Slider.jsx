import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./slider.module.css";
import { setSize } from "../../store/cardSlice";

function Slider() {
  const [value, setValue] = useState(5);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(setSize(event.target.value));
  };

  return (
    <div className={s.slider}>
      <input
        id="range1"
        type="range"
        min="0"
        max="10"
        value={value}
        onChange={handleChange}
        style={{ zIndex: "1" }}
      ></input>

      <div>{value}</div>
    </div>
  );
}

export default Slider;
