import { persist } from 'easy-peasy';

import type { StoreModel } from './types';
import pokerHandsModel from '@components/containers/PokerGame/state/poker-hands-model';
import alertsModel from '@components/containers/PokerGame/state/alert-model';
import winnersModel from '@components/containers/PokerGame/state/winners-model';
import userModel from '@features/authentication/user-model';

export const models: StoreModel = {
  playersHands: persist(pokerHandsModel),
  alert: alertsModel,
  winners: persist(winnersModel),
  user: persist(userModel),
};
