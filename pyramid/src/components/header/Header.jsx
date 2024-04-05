import s from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className={s.header}>
      <h1 className={s.tac_one_regular}>Pyramid</h1>
      <FontAwesomeIcon icon='fa-solid fa-check-square' />
      <button className={`${s.btn_hover} ${s.color_5}`}>CANCEL</button>
      <button className={`${s.btn_hover} ${s.color_5}`}>HINT</button>
      <button className={`${s.btn_hover} ${s.color_5}`}>NEW GAME</button>
      <button className={`${s.btn_hover} ${s.color_5}`}>RESTART</button>
    </div>
  );
}
