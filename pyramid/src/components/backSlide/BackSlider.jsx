import { useState } from "react";
import s from "./backslider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../store/cardSlice";

const BackSlider = () => {
  //   const [currentImage, setCurrentImage] = useState(1);
  const back = useSelector((state) => state.pyramid.backFont);
  const dispatch = useDispatch();

  const [way, setWay] = useState("0px");
  const [backWay, setBackWay] = useState(1);

  // function handleClick(event) {
  //   const { clientX } = event;
  //   const { left, width } = event.target.getBoundingClientRect();
  //   const middleX = left + width / 2;

  //   if (clientX < middleX) {
  //     setWay("50px");
  //     setBackWay(0);
  //     dispatch(setColor(backWay));
  //   } else {
  //     setWay("0px");
  //     setBackWay(1);
  //     dispatch(setColor(backWay));
  //   }
  //   console.log(test);
  // }

  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(${back[backWay]})`;
  // }, [backWay]);

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
        alt='background image'
        className={s.imageSlider1}
        onClick={setBackGreen}
      />
      <img
        src={back[0]}
        alt='background image'
        className={s.imageSlider2}
        onClick={setBackWhite}
      />
    </div>
  );
};

export default BackSlider;
