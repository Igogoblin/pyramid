import { createRez, showRez } from "../../store/cardSlice";
import s from "../body/body.module.css";
import { useDispatch } from "react-redux";

const BackCard = () => {
  const dispatch = useDispatch();

  function next() {
    dispatch(createRez());
    dispatch(showRez());
    // dispatch(createRule()); в будущем может понадобится
  }

  return <div className={s.back} onClick={next}></div>;
};

export default BackCard;
