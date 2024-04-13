import s from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft,
  faLightbulb,
  faPlus,
  faArrowLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className={s.header}>
      <h1 className={s.tac_one_regular}>Pyramid</h1>

      <button className={`${s.btn_hover} ${s.color_5}`}>
        {" "}
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: "#ffffff" }}
        />{" "}
        <span>CANCEL</span>
      </button>
      <button className={`${s.btn_hover} ${s.color_5}`}>
        {" "}
        <FontAwesomeIcon
          icon={faLightbulb}
          style={{ color: "#ffffff" }}
        />{" "}
        <span>HINT</span>
      </button>
      <button className={`${s.btn_hover} ${s.color_5}`}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "#fafafa" }}
        />{" "}
        <span>NEW GAME</span>
      </button>
      <button className={`${s.btn_hover} ${s.color_5}`}>
        <FontAwesomeIcon
          icon={faRotateLeft}
          style={{ color: "#ffffff" }}
        />{" "}
        <span>RESTART</span>
      </button>
      <button className={`${s.btn_hover} ${s.color_5} `}>
        <FontAwesomeIcon
          icon={faGear}
          style={{ color: "#ffffff" }}
        />{" "}
        <span>OPTIONS</span>
      </button>
    </div>
  );
}
