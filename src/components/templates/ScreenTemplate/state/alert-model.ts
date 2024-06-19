import { ColorOptions } from "@/global/theme";
import { Action, action } from "easy-peasy";

interface Alert {
  isVisible: boolean;
  message: string;
  color?: ColorOptions;
}
export interface AlertModel {
  alertConfig: Alert;
  configureAlert: Action<AlertModel, Alert>;
}

const alertsModel: AlertModel = {
  alertConfig: { isVisible: false, message: "", color: undefined },
  configureAlert: action((state, payload) => {
    state.alertConfig = payload;
  }),
};

export default alertsModel;
