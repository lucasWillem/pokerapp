import { Action } from "easy-peasy";
import { Hand } from "../global/types";

export interface StoreModel {
  playersHands: PokerHandsModel;
}

export interface PokerHandsModel {
  pokerHands: Hand[];
  storePokerHands: Action<PokerHandsModel, Hand[]>;
}
