import { useDispatch, useSelector } from "react-redux";
import { createOtb } from "../../store/cardSlice";
const Res = () => {
  const card = useSelector((state) => state.pyramid.rez);
  const otb = useSelector((state) => state.pyramid.otb);
  const itemCard = useSelector((state) => state.pyramid.rezCount);
  const dispatch = useDispatch();
  // console.log(card);
  function toOtb() {
    dispatch(createOtb());
    // console.log("work to otb");
  }
  return (
    itemCard > -1 &&
    card[itemCard] !== otb[otb.length - 1] && (
      <div
        style={{
          backgroundImage: `url(${card[itemCard].way})`,
        }}
        onClick={toOtb}
      ></div>
    )
  );
};

export default Res;
