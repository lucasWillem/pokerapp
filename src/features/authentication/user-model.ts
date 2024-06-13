import { action } from 'easy-peasy';
import type { UserModel } from '@redux/types';

const userModel: UserModel = {
  user: undefined,
  storeUser: action((state, payload) => {
    state.user = payload;
  }),
  clearUser: action((state) => {
    state.user = undefined;
  }),
};

export default userModel;
