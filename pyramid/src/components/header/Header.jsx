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

export default function Header() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState(false);
  const back = useSelector((state) => state.pyramid.backFont);
  const backCard = useSelector((state) => state.pyramid.backs);

  const backMove = () => {
    dispatch(moveBack());
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

        <button
          className={`${s.btn_hover} ${s.color_5} ${s.tooltip}`}
          data-tooltip='A Move Back'
          // title="A Move Back"
          onClick={backMove}
        >
          {" "}
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "#ffffff" }}
          />{" "}
          <span>CANCEL</span>
        </button>
        <button
          className={`${s.btn_hover} ${s.color_5}  ${s.tooltip}`}
          data-tooltip='Hint'
          onClick={() => dispatch(setHint())}
        >
          {" "}
          <FontAwesomeIcon
            icon={faLightbulb}
            style={{ color: "#ffffff" }}
          />{" "}
          <span>HINT</span>
        </button>
        <button
          className={`${s.btn_hover} ${s.color_5} ${s.tooltip}`}
          data-tooltip='New Game'
        >
          <FontAwesomeIcon
            icon={faPlus}
            style={{ color: "#fafafa" }}
          />{" "}
          <span>NEW GAME</span>
        </button>
        <button
          className={`${s.btn_hover} ${s.color_5} ${s.tooltip}`}
          data-tooltip='Restart This Game'
        >
          <FontAwesomeIcon
            icon={faRotateLeft}
            style={{ color: "#ffffff" }}
          />{" "}
          <span>RESTART</span>
        </button>
        <button
          className={`${s.btn_hover} ${s.color_5} ${s.tooltip}`}
          data-tooltip='Options'
          onClick={openOptions}
        >
          <FontAwesomeIcon
            icon={faGear}
            style={{ color: "#ffffff" }}
          />{" "}
          <span>OPTIONS</span>
        </button>
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
          <div className='backs'>
            <h4>Card Size</h4>
            <Slider />
          </div>
          <div className='backs'>
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
