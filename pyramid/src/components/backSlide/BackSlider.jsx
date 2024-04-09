import { useState } from "react";
import s from "./backslider.module.css";
import { useSelector } from "react-redux";

const BackSlider = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const back = useSelector((state) => state.pyramid.backFont);
  console.log(back);
  //   const handleClick = () => {
  //     setCurrentImage(currentImage === 1 ? 2 : 1);
  //   };

  return (
    <div className={s.place}>
      <img
        // src={currentImage === 1 ? back[1] : back[0]}
        src={back[1]}
        alt="background image"
        className={s.imageSlider1}
      />
      <img
        // src={currentImage === 1 ? back[1] : back[0]}
        src={back[0]}
        alt="background image"
        className={s.imageSlider2}
      />
      {/* <button onClick={handleClick}>Следующее изображение</button> */}
    </div>
  );
};

export default BackSlider;
