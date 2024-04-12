import { useState } from "react";
import { useSelector } from "react-redux";

const Retreat = () => {
  const card = useSelector((state) => state.pyramid.otb);
  const [active, setActive] = useState(false);
  function check() {
    setActive(!active);
  }
  return (
    card.length > 0 && (
      <div
        style={{
          backgroundImage: `url(${card[card.length - 1].way})`,
          ...(active && { transform: "scale(1.3)" }),
        }}
        onClick={check}
      ></div>
    )
  );
};

export default Retreat;
