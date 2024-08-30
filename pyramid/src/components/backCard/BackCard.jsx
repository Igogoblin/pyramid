import {
  createRez,
  setBackStepNorm,
  setHint,
  setOtb,
  showRez,
  setSteps,
} from "../../store/cardSlice";
import s from "../body/body.module.css";
import { useDispatch, useSelector } from "react-redux";

const BackCard = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.pyramid);
  const backImage = useSelector((state) => state.pyramid.backs);
  const backImageIndex = useSelector((state) => state.pyramid.backCard);

  function next() {
    dispatch(setBackStepNorm());
    dispatch(createRez());
    dispatch(showRez());
    dispatch(setOtb());
    dispatch(setHint(false));
    dispatch(setSteps());
    if (card.steps == 0) {
      localStorage.setItem("step0", JSON.stringify(card));
      localStorage.setItem("restartPyramidTrue", JSON.stringify(true));
    }
    // dispatch(createRule()); в будущем может понадобится
  }

  return (
    <div
      className={s.back}
      onClick={next}
      style={{ backgroundImage: `url(${backImage[backImageIndex]})` }}
    ></div>
  );
};

export default BackCard;
