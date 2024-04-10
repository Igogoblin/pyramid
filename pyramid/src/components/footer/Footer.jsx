import BackSlider from "../backSlide/BackSlider";
import Slider from "../slider/Slider";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Slider />
      <BackSlider />
      <div>back</div>
      <div>00:01</div>
      <div>00</div>
    </footer>
  );
};

export default Footer;
