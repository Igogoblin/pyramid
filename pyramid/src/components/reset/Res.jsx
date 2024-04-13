import { useDispatch, useSelector } from "react-redux";
import {
  createOtb,
  activationTrue,
  activationFalse,
} from "../../store/cardSlice";
import { useState } from "react";

const Res = () => {
  const card = useSelector((state) => state.pyramid.rez);
  const otb = useSelector((state) => state.pyramid.otb);
  const itemCard = useSelector((state) => state.pyramid.rezCount);
  const activation = useSelector((state) => state.pyramid.activation);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  // console.log(card);
  function toOtb() {
    if (active) {
      dispatch(createOtb());
      setActive(false);
      dispatch(activationFalse());
    } else {
      setActive(true);
      dispatch(activationTrue());
    }

    // console.log("work to otb");
  }
  return (
    itemCard > -1 &&
    card[itemCard] !== otb[otb.length - 1] && (
      <div
        style={{
          backgroundImage: `url(${card[itemCard].way})`,
          ...(active && { transform: "scale(1.3)" }),
          ...(activation &&
            !active && {
              pointerEvents: "none",
            }),
        }}
        onClick={toOtb}
      >
              <div
        style={{
          width: "0px",
          height: "0px",
          ...(activation && !active &&{
            backgroundColor: "#00000080",
            width: "100%",
            height: "100%",
          }),
        }}
      ></div>
      </div>
    )
  );
};

export default Res;
