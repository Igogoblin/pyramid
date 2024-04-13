import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activationFalse, activationTrue } from "../../store/cardSlice";

const Retreat = () => {
  const card = useSelector((state) => state.pyramid.otb);
  const activation = useSelector((state) => state.pyramid.activation);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  function check() {
    setActive(!active);
    if (active) {
      dispatch(activationFalse());
    } else if (!active) {
      dispatch(activationTrue());
    }
  }
  return (
    card.length > 0 && (
      <div
        style={{
          backgroundImage: `url(${card[card.length - 1].way})`,
          ...(active && { transform: "scale(1.3)" }),
          ...(activation &&
            !active && {
              pointerEvents: "none",
            }),
        }}
        onClick={check}
      >
        <div
          style={{
            width: "0px",
            height: "0px",
            ...(activation &&
              !active && {
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

export default Retreat;
