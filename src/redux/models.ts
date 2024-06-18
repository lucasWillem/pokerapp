import { persist } from "easy-peasy";

import type { StoreModel } from "./types";
import pokerHandsModel from "@components/containers/PokerGame/state/poker-hands-model";

import userModel from "@authentication/user-model";
import alertsModel from "@components/templates/ScreenTemplate/state/alert-model";
import winnersModel from "@components/containers/PokerGame/state/winners-model";

export const models: StoreModel = {
  playersHands: persist(pokerHandsModel),
  alert: alertsModel,
  winners: persist(winnersModel),
  user: persist(userModel),
};
