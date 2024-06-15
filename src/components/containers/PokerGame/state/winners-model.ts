import { action } from 'easy-peasy';
import type { WinnersModel } from '@redux/types';

const winnersModel: WinnersModel = {
  winners: [],
  storeWinners: action((state, payload) => {
    state.winners = payload;
  }),
  clearWinners: action((state) => {
    state.winners = [];
  }),
};

export default winnersModel;
