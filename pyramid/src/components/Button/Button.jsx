import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import s from "../header/header.module.css";

const Button = ({ icon, span, data_tooltip, onClick }) => {
  return (
    <button
      className={`${s.btn_hover} ${s.color_5} ${s.tooltip}`}
      data-tooltip={data_tooltip}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ color: "#ffffff" }}
      />{" "}
      <span>{span}</span>
    </button>
  );
};

export default Button;
