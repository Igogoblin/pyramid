import s from "./header.module.css";
import {
  faRotateLeft,
  faLightbulb,
  faPlus,
  faArrowLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Timer from "../footer/Timer";
import Slider from "../slider/Slider";
import Button from "../Button/Button";
import {
  setColor,
  stepBack,
  setCardBackIndex,
  setHint,
} from "../../store/cardSlice";

// import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState(false);
  // const [reload, setReload] = useState(false);
  const back = useSelector((state) => state.pyramid.backFont);
  const backCard = useSelector((state) => state.pyramid.backs);
  const cards = useSelector((state) => state.pyramid);

  const hint = () => {
    dispatch(setHint(true));
    setTimeout(() => {
      dispatch(setHint(false));
    }, 1000);
  };

  const openOptions = () => {
    if (!options) {
      setOptions(true);
    } else {
      setOptions(false);
    }
  };

  const restart = () => {
    localStorage.setItem("restartPyramid", JSON.stringify(cards.cards));
    localStorage.setItem("restartPyramidTrue", JSON.stringify(true));
  };

  const changeBackground = (index) => {
    dispatch(setColor(index));
  };

  const changeCardBack = (index) => {
    dispatch(setCardBackIndex(index));
  };

  const backMove = () => {
    dispatch(stepBack());
    localStorage.setItem("restartPyramid", JSON.stringify(cards.cards));
    localStorage.setItem("restartPyramidTrue", JSON.stringify(true));
    localStorage.setItem("stepTrue", JSON.stringify(cards.backStep));
    localStorage.setItem("steps", cards.steps);
  };

  return (
    <div className={s.header}>
      <div className={s.buttons}>
        <h1 className={s.tac_one_regular}>Pyramid</h1>

        <Button
          icon={faArrowLeft}
          span={"CANCEL"}
          data_tooltip="One Move Back"
          onClick={backMove}
        />

        <Button
          icon={faLightbulb}
          span={"HINT"}
          data_tooltip="Hint"
          onClick={hint}
        />
        <a href="/">
          <Button
            icon={faPlus}
            span={"NEW GAME"}
            data_tooltip="New Game"
          />
        </a>

        {/* <Link to="/"> */}
        <a href="/">
          <Button
            icon={faRotateLeft}
            span={"RESTART"}
            data_tooltip="Restart This Game"
            onClick={restart}
          />
        </a>

        {/* </Link> */}

        <Button
          icon={faGear}
          span={"OPTIONS"}
          data_tooltip="Options"
          onClick={openOptions}
        />
      </div>
      <div
        className={`${s.block_options}`}
        style={{ display: options ? "block" : "none" }}
      >
        <div
          onClick={openOptions}
          className={s.close_options}
        ></div>
        <div className={`${s.options}`}>
          <h4>Backgrounds:</h4>
          <div className={`${s.backgrounds}`}>
            <div className={`${s.block}`}>
              {back.map(
                (el, index) =>
                  index < 4 && (
                    <img
                      src={back[index]}
                      key={index}
                      onClick={() => changeBackground(index)}
                    />
                  )
              )}
            </div>
            <div className={`${s.block}`}>
              {back.map(
                (el, index) =>
                  index > 3 && (
                    <img
                      src={back[index]}
                      key={index}
                      onClick={() => changeBackground(index)}
                    />
                  )
              )}
            </div>
          </div>
          <h4>Backs:</h4>
          <div className={`${s.backs}`}>
            {backCard.map((el, index) => (
              <img
                src={backCard[index]}
                key={index}
                onClick={() => changeCardBack(index)}
              />
            ))}
          </div>
          <div className="backs">
            <h4>Card Size</h4>
            <Slider />
          </div>
          <div className="backs">
            <br />
            <Timer />
          </div>
        </div>
        <div
          onClick={openOptions}
          className={`${s.close_options_bottom} ${s.close_options}`}
        ></div>
      </div>
    </div>
  );
}
