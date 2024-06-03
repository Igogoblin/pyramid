import s from "./header.module.css";
import {
  faRotateLeft,
  faLightbulb,
  faPlus,
  faArrowLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Timer from "../footer/Timer";
import Button from "../Button/Button";
import {
  setColor,
  stepBack,
  setCardBackIndex,
  setHint,
  restart,
} from "../../store/cardSlice";

// import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState(false);

  // const [reload, setReload] = useState(false);
  const back = useSelector((state) => state.pyramid.backFont);
  const backCard = useSelector((state) => state.pyramid.backs);
  // const cards = useSelector((state) => state.pyramid);

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

  const restartButton = () => {
    dispatch(restart());
  };

  const changeBackground = (index) => {
    dispatch(setColor(index));
  };

  const changeCardBack = (index) => {
    dispatch(setCardBackIndex(index));
  };

  const backMove = () => {
    // if (cards.steps <= 0) {
    //   return restartButton();
    // }
    dispatch(stepBack());
  };

  useEffect(() => {
    localStorage.setItem("restartPyramidTrue", false);
    localStorage.setItem("stepTrue", false);
  }, []);
  // localStorage.clear();
  return (
    <div className={s.header}>
      <div className={s.buttons}>
        <h1 className={s.tac_one_regular}>Pyramid</h1>
        <a href="/">
          <Button
            icon={faArrowLeft}
            span={"CANCEL"}
            data_tooltip="One Move Back"
            onClick={backMove}
          />
        </a>
        <Button
          icon={faLightbulb}
          span={"HINT"}
          data_tooltip="Hint"
          onClick={hint}
        />
        <a href="/">
          <Button icon={faPlus} span={"NEW GAME"} data_tooltip="New Game" />
        </a>

        {/* <Link to="/"> */}
        <a href="/">
          <Button
            icon={faRotateLeft}
            span={"RESTART"}
            data_tooltip="Restart This Game"
            onClick={restartButton}
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
        <div onClick={openOptions} className={s.close_options}></div>
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
