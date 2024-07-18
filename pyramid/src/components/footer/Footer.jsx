import { useSelector } from "react-redux";
import BackSlider from "../backSlide/BackSlider";
import Slider from "../slider/Slider";
import s from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import Timer from "./Timer";

const Footer = () => {
  const c = useSelector((state) => state.pyramid);
  const colors = useSelector((state) => state.pyramid.colors);

  function info() {
    console.log(c);
  }

  return (
    <footer
      className={s.footer}
      style={{
        ...(colors == 1 || colors == 6
          ? { color: "white" }
          : { color: "black" }),
      }}
    >
      <div className={s.mob_display}>
        <Slider />
      </div>
      <div className={s.mob_display}>
        <BackSlider />
      </div>
      <div
        onClick={info}
        className={s.information}
      >
        info
      </div>
      <Timer />
      <div>
        {" "}
        <FontAwesomeIcon
          icon={faShoePrints}
          style={{ color: "#ffffff" }}
        />{" "}
        {c.steps}
      </div>
    </footer>
  );
};

export default Footer;
