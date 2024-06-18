import type { UserModel } from "@authentication/user-model";
import type { AlertModel } from "@components/templates/ScreenTemplate/state/alert-model";
import type { PokerHandsModel } from "@components/containers/PokerGame/state/poker-hands-model";
import type { WinnersModel } from "@components/containers/PokerGame/state/winners-model";

export interface StoreModel {
  playersHands: PokerHandsModel;
  alert: AlertModel;
  winners: WinnersModel;
  user: UserModel;
}
