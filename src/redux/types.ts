import { Action } from 'easy-peasy';
import { Hand } from '@global/types';

export interface PokerHandsModel {
  pokerHands: Hand[];
  storePokerHands: Action<PokerHandsModel, Hand[]>;
  clearPokerHands: Action<PokerHandsModel>;
}
export interface User {
  username: string;
  email: string;
  password: string;
  jwt: string;
}

export interface UserModel {
  user?: User;
  storeUser: Action<UserModel, User>;
  clearUser: Action<UserModel>;
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
  user: UserModel;
}

export interface WinnersModel {
  winners: number[];
  storeWinners: Action<WinnersModel, number[]>;
  clearWinners: Action<WinnersModel>;
}
