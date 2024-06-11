import { Action } from 'easy-peasy';
import { Hand } from '../global/types';

export interface PokerHandsModel {
  pokerHands: Hand[];
  storePokerHands: Action<PokerHandsModel, Hand[]>;
  clearPokerHands: Action<PokerHandsModel, []>;
}

interface alert {
  isVisible: boolean;
  message: string;
}
export interface AlertModel {
  alertConfig: alert;
  configureAlert: Action<AlertModel, alert>;
}

export interface StoreModel {
  playersHands: PokerHandsModel;
  alert: AlertModel;
  winners: WinnersModel;
}

export interface WinnersModel {
  winners: number[];
  storeWinners: Action<WinnersModel, number[]>;
  clearWinners: Action<WinnersModel, []>;
}
