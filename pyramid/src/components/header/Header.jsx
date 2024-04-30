import s from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft,
  faLightbulb,
  faPlus,
  faArrowLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { moveBack, setHint } from "../../store/cardSlice";
import { useState } from "react";
import Timer from "../footer/Timer";
import Slider from "../slider/Slider";
import Button from "../Button/Button";

export default function Header() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState(false);
  const back = useSelector((state) => state.pyramid.backFont);
  const backCard = useSelector((state) => state.pyramid.backs);

  // const backMove = () => {
  //   dispatch(moveBack());
  // };

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

  return (
    <div className={s.header}>
      <div className={s.buttons}>
        <h1 className={s.tac_one_regular}>Pyramid</h1>

        <Button
          icon={faArrowLeft}
          span={"CANCEL"}
          data_tooltip="One Move Back"
          // onClick={backMove}
        />

        <Button
          icon={faLightbulb}
          span={"HINT"}
          data_tooltip="Hint"
          onClick={hint}
        />

        <Button
          icon={faPlus}
          span={"NEW GAME"}
          data_tooltip="New Game"
          // onClick={hint}
        />

        <Button
          icon={faRotateLeft}
          span={"RESTART"}
          data_tooltip="Restart This Game"
          // onClick={hint}
        />

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
              <img src={back[1]} />
              <img src={back[0]} />
              <img src={back[2]} />
              <img src={back[3]} />
            </div>
            <div className={`${s.block}`}>
              <img src={back[4]} />
              <img src={back[5]} />
              <img src={back[6]} />
              <img src={back[7]} />
            </div>
          </div>
          <h4>Backs:</h4>
          <div className={`${s.backs}`}>
            <img src={backCard[0]} />
            <img src={backCard[1]} />
            <img src={backCard[2]} />
            <img src={backCard[3]} />
            <img src={backCard[4]} />
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
