import { Action, action } from "easy-peasy";

interface User {
  username: string;
  jwt: string;
}

export interface UserModel {
  user?: User;
  storeUser: Action<UserModel, User>;
  clearUser: Action<UserModel>;
}

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
