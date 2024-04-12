import { useDispatch, useSelector } from "react-redux";
import { createOtb } from "../../store/cardSlice";
import { useState } from "react";
const Res = () => {
  const card = useSelector((state) => state.pyramid.rez);
  const otb = useSelector((state) => state.pyramid.otb);
  const itemCard = useSelector((state) => state.pyramid.rezCount);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  // console.log(card);
  function toOtb() {
    if (active) {
      dispatch(createOtb());
      setActive(false);
    } else {
      setActive(true);
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
        }}
        onClick={toOtb}
      ></div>
    )
  );
};

export default Res;
