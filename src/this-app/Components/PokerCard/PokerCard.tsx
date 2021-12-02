import "./Card.css";
import {
  SuitClubFill,
  SuitDiamondFill,
  SuitSpadeFill,
  SuitHeartFill,
} from "react-bootstrap-icons";

const PokerCard = function () {
  return (
    <div className="Card">
      <SuitClubFill />
      <SuitDiamondFill />
      <SuitSpadeFill />
      <SuitHeartFill />
    </div>
  );
};

export default PokerCard;
