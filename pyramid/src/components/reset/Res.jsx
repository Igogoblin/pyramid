import { useSelector } from "react-redux";
// import { createOtb } from "../../store/cardSlice";

const Res = () => {

  const card = useSelector((state) => state.pyramid);


  return (
    // card[itemCard] !== otb[otb.length - 1] && ( // уходит из рез в отб
    card.rezCount >= 0 &&
    !card.doBack && (
      <div
        style={{
          backgroundImage: `url(${card.rez[card.rezCount].way})`,
        }}
      ></div>
    )
  );
};

export default Res;
