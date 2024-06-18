import { Action, action } from "easy-peasy";
import type { Hand } from "../PokerGame.types";
export interface PokerHandsModel {
  pokerHands: Hand[];
  storePokerHands: Action<PokerHandsModel, Hand[]>;
  clearPokerHands: Action<PokerHandsModel>;
}

const pokerHandsModel: PokerHandsModel = {
  pokerHands: [],
  storePokerHands: action((state, payload) => {
    if (state.pokerHands.length === 0) {
      state.pokerHands = payload;
    }
  }),
  clearPokerHands: action((state) => {
    state.pokerHands = [];
  }),
};

export default pokerHandsModel;
