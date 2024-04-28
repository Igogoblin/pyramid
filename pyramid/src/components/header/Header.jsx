import s from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft,
  faLightbulb,
  faPlus,
  faArrowLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { moveBack, setHint } from "../../store/cardSlice";

export default function Header() {
  const dispatch = useDispatch();
  // const card = useSelector((state) => state.pyramid);

  const backMove = () => {
    dispatch(moveBack());
  };
  const hint = () => {
    dispatch(setHint(true));
    setTimeout(() => {
      dispatch(setHint(false));
    }, 1000);
  };

  return (
    <div className={s.header}>
      <h1 className={s.tac_one_regular}>Pyramid</h1>

      <button
        className={`${s.btn_hover} ${s.color_5} ${s.tooltip}`}
        data-tooltip="A Move Back"
        // title="A Move Back"
        onClick={backMove}
      >
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff" }} />{" "}
        <span>CANCEL</span>
      </button>
      <button
        className={`${s.btn_hover} ${s.color_5}  ${s.tooltip}`}
        data-tooltip="Hint"
        onClick={hint}
      >
        {" "}
        <FontAwesomeIcon icon={faLightbulb} style={{ color: "#ffffff" }} />{" "}
        <span>HINT</span>
      </button>
      <button className={`${s.btn_hover} ${s.color_5}`}>
        <FontAwesomeIcon icon={faPlus} style={{ color: "#fafafa" }} />{" "}
        <span>NEW GAME</span>
      </button>
      <button className={`${s.btn_hover} ${s.color_5}`}>
        <FontAwesomeIcon icon={faRotateLeft} style={{ color: "#ffffff" }} />{" "}
        <span>RESTART</span>
      </button>
      <button className={`${s.btn_hover} ${s.color_5} `}>
        <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff" }} />{" "}
        <span>OPTIONS</span>
      </button>
    </div>
  );
}
