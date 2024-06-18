import { Action, action } from "easy-peasy";
export interface WinnersModel {
  winners: number[];
  storeWinners: Action<WinnersModel, number[]>;
  clearWinners: Action<WinnersModel>;
}

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
