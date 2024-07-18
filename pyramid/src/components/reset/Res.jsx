import { useSelector, useDispatch } from "react-redux";
import { setBodyGame } from "../../store/cardSlice";
// import { createOtb } from "../../store/cardSlice";

const Res = () => {
  const card = useSelector((state) => state.pyramid);
  // const index = localStorage.getItem(`step${card.steps}`).rezCount;
  const dispatch = useDispatch();

  function actionCard() {
    const otbCard = card.otb.length + 27; // индексом в картах через отбой
    console.log(otbCard);

    dispatch(setBodyGame(otbCard));
  }

  return (
    // card[itemCard] !== otb[otb.length - 1] && ( // уходит из рез в отб
    card.rezCount >= 0 &&
    !card.doBack && (
      <div
        style={{
          backgroundImage: `url(${card.rez[card.rezCount].way})`,
        }}
        onClick={actionCard()}
      ></div>
    )
  );
};

export default Res;
