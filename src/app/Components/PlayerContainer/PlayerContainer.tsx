import type { Hand } from "../../../global/types";
import PokerPlayer from "../PokerPlayer";
import "./PlayerContainer.css";

type Props = {
  pokerHands: Hand[];
};

const PlayerContainer = function ({ pokerHands }: Props) {
  return (
    <div className="PlayerContainer">
      {pokerHands.map((hand, i) => (
        <div className="PlayerWrapper">
          <p className="PlayerName">player: {i + 1}</p>
          <PokerPlayer pokerhand={hand} />
        </div>
      ))}
    </div>
  );
};

export default PlayerContainer;
