import { action } from "easy-peasy";
import type { PokerHandsModel } from "../../../../redux/types";

const pokerHandsModel: PokerHandsModel = {
  pokerHands: [],
  storePokerHands: action((state, payload) => {
    if (state.pokerHands.length === 0) {
      state.pokerHands = payload;
    }
  }),
  clearPokerHands: action((state, payload) => {
    state.pokerHands = payload;
  }),
};

export default pokerHandsModel;
