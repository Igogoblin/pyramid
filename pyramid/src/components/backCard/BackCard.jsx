import { createRez, showRez } from "../../store/cardSlice";
import s from "../body/body.module.css";
import { useDispatch, useSelector } from "react-redux";

const BackCard = () => {
  const dispatch = useDispatch();
  const activation = useSelector((state) => state.pyramid.activation);
  const check = useSelector((state) => state.pyramid);

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
        }),
        ...(check.rezCount == check.otb.length && {
          pointerEvents: "none",
        }),
      }}
    >
      <div
        style={{
          width: "0px",
          height: "0px",
          ...(activation && {
            backgroundColor: "#00000080",
            width: "100%",
            height: "100%",
          }),
          ...(check.rezCount == check.otb.length && {
            backgroundColor: "#00000080",
            width: "100%",
            height: "100%",
          }),
        }}
      ></div>
    </div>
  );
};

export default BackCard;
