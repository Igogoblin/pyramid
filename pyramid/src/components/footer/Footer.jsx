import { useSelector } from "react-redux";
import BackSlider from "../backSlide/BackSlider";
import Slider from "../slider/Slider";
import s from "./footer.module.css";

const Footer = () => {
  const c = useSelector((state) => state.pyramid);
  function info() {
    console.log(c);
  }
  return (
    <footer className={s.footer}>
      <Slider />
      <BackSlider />
      <div onClick={info} className={s.information}>
        info
      </div>
      <div>00:01</div>
      <div>00</div>
    </footer>
  );
};

export default Footer;
