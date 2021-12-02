import "./Card.css";
import {
  SuitClubFill,
  SuitDiamondFill,
  SuitSpadeFill,
  SuitHeartFill,
} from "react-bootstrap-icons";

const Card = function () {
  return (
    <div className="Card">
      <SuitClubFill />
      <SuitDiamondFill />
      <SuitSpadeFill />
      <SuitHeartFill />
    </div>
  );
};

export default Card;
