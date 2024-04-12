import { useState, useEffect } from "react";
import s from "./backslider.module.css";
import { useSelector } from "react-redux";

const BackSlider = () => {
  //   const [currentImage, setCurrentImage] = useState(1);
  const back = useSelector((state) => state.pyramid.backFont);

  const [way, setWay] = useState("0px");
  const [backWay, setBackWay] = useState(1);

  function handleClick(event) {
    const { clientX } = event;
    const { left, width } = event.target.getBoundingClientRect();
    const middleX = left + width / 2;

    if (clientX < middleX) {
      setWay("50px");
      setBackWay(0);
    } else {
      setWay("0px");
      setBackWay(1);
    }
  }

  useEffect(() => {
    document.body.style.backgroundImage = `url(${back[backWay]})`;
  }, [backWay]);

  return (
    <div
      className={s.place}
      onClick={handleClick}
    >
      <img
        src={back[1]}
        alt='background image'
        className={s.imageSlider1}
      />
      <img
        src={back[0]}
        alt='background image'
        className={s.imageSlider2}
      />
      <div
        className={s.bordSlider}
        style={{ transform: `translateX(${way})` }}
      ></div>
    </div>
  );
};

export default BackSlider;
