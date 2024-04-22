import { useSelector } from "react-redux";
// import { createOtb } from "../../store/cardSlice";

const Res = () => {
  const card = useSelector((state) => state.pyramid.rez);
  const otb = useSelector((state) => state.pyramid.otb);
  const itemCard = useSelector((state) => state.pyramid.rezCount);
  // const dispatch = useDispatch();
  // function toOtb() {
  //   dispatch(createOtb());
  // } a?a:b
  return (
    card[itemCard] !== otb[otb.length - 1] && (
      <div
        style={{
          backgroundImage: `url(${card[itemCard].way})`,
        }}
        // onClick={toOtb}
      ></div>
    )
  );
};

export default Res;
