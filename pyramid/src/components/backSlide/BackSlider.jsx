// import { useState } from "react";
import s from "./backslider.module.css";
import { useSelector } from "react-redux";

const BackSlider = () => {
  //   const [currentImage, setCurrentImage] = useState(1);
  const back = useSelector((state) => state.pyramid.backFont);
  console.log(back);
  //   const handleClick = () => {
  //     setCurrentImage(currentImage === 1 ? 2 : 1);
  //   };

  return (
    <div className={s.place}>
      <img src={back[1]} alt="background image" className={s.imageSlider1} />
      <img src={back[0]} alt="background image" className={s.imageSlider2} />
      <div
        className={s.bordSlider}
        style={{ transform: "translateX(0px)" }}
        //для перемещения надо использовать 50px
      ></div>
    </div>
  );
};

export default BackSlider;
