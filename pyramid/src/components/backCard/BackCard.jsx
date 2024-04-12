import { createRez, showRez } from "../../store/cardSlice";
import s from "../body/body.module.css";
import { useDispatch, useSelector } from "react-redux";

const BackCard = () => {
  const dispatch = useDispatch();
  const activation = useSelector((state) => state.pyramid.activation);

  function next() {
    dispatch(createRez());
    dispatch(showRez());
    // console.log("we push back card");
  }

  return (
    <div
      className={s.back}
      onClick={next}
      style={{
        ...(activation && {
          pointerEvents: "none",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }),
      }}
    ></div>
  );
};

export default BackCard;
