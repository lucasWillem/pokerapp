import { action } from 'easy-peasy';
import type { AlertModel } from '../../../../redux/types';

const alertsModel: AlertModel = {
  alertConfig: { isVisible: false, message: '' },
  configureAlert: action((state, payload) => {
    state.alertConfig = payload;
  }),
};

export default alertsModel;
