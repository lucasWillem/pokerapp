import { persist } from "easy-peasy";

import type { StoreModel } from "./types";
import pokerHandsModel from "./this-app/models/poker-hands-model";

export const models: StoreModel = {
  playersHands: persist(pokerHandsModel),
};
