import { useSelector } from "react-redux";

const Retreat = () => {
  const card = useSelector((state) => state.pyramid.otb);
  return (
    card.length > 0 && (
      <div
        style={{
          backgroundImage: `url(${card[card.length - 1].way})`,
        }}
      >
      </div>
    )
  );
};

export default Retreat;
