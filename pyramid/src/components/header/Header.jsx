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
        CANCEL
      </button>
      <button className={`${s.btn_hover} ${s.color_5}`}>
        {" "}
        <FontAwesomeIcon
          icon={faLightbulb}
          style={{ color: "#ffffff" }}
        />{" "}
        HINT
      </button>
      <button className={`${s.btn_hover} ${s.color_5}`}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "#fafafa" }}
        />{" "}
        NEW GAME
      </button>
      <button className={`${s.btn_hover} ${s.color_5}`}>
        <FontAwesomeIcon
          icon={faRotateLeft}
          style={{ color: "#ffffff" }}
        />{" "}
        RESTART
      </button>
      <button className={`${s.btn_hover} ${s.color_5} ${s.no_display}`}>
        <FontAwesomeIcon
          icon={faGear}
          style={{ color: "#ffffff" }}
        />
      </button>
    </div>
  );
}
