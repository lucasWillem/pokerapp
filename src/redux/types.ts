import { Action } from "easy-peasy";
import { Hand } from "../global/types";

interface alert {
  isVisible: boolean;
  message: string;
}

export interface StoreModel {
  playersHands: PokerHandsModel;
  alert: AlertModel;
}

export interface PokerHandsModel {
  pokerHands: Hand[];
  storePokerHands: Action<PokerHandsModel, Hand[]>;
}

export interface AlertModel {
  alertConfiguration: alert;
  setAlertConfiguration: Action<AlertModel, alert>;
}
