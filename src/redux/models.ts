import { persist } from "easy-peasy";

import type { StoreModel } from "./types";
import pokerHandsModel from "./this-app/models/poker-hands-model";
import alertsModel from "./global/alert-model";

export const models: StoreModel = {
  playersHands: persist(pokerHandsModel),
  alert: alertsModel,
};
