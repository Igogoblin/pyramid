import BackSlider from "../backSlide/BackSlider";
import Slider from "../slider/Slider";
import s from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.mob_display}>
        <Slider />
      </div>
      <div className={s.mob_display}>
        <BackSlider />
      </div>

      <div>00:01</div>
      <div>
        {" "}
        <FontAwesomeIcon
          icon={faShoePrints}
          style={{ color: "#ffffff" }}
        />{" "}
        00
      </div>
    </footer>
  );
};

export default Footer;
