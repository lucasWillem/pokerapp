import type { Hand } from "../../../global/types";
import PokerPlayer from "../PokerPlayer";

type Props = {
  pokerHands: Hand[];
};

const PlayerContainer = function ({ pokerHands }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {pokerHands.map((hand) => (
        <PokerPlayer pokerhand={hand} />
      ))}
    </div>
  );
};

export default PlayerContainer;
