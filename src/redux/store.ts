import { createStore } from "easy-peasy";

import { models } from "./index";

const store = createStore(models);

export { store };
