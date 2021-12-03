import { action } from "easy-peasy";
import type { AlertModel } from "../types";

const alertsModel: AlertModel = {
  alertConfiguration: { isVisible: false, message: "" },
  setAlertConfiguration: action((state, payload) => {
    state.alertConfiguration = payload;
  }),
};

export default alertsModel;
