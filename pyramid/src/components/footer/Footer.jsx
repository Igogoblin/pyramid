import BackSlider from "../backSlide/BackSlider";
import Slider from "../slider/Slider";
import s from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Footer = () => {
  const colors = useSelector((state) => state.pyramid.colors);

  return (
    <footer
      className={s.footer}
      style={{
        ...(colors == 1 ? { color: "white" } : { color: "black" }),
      }}
    >
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
