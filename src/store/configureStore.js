import { createStore } from "redux";
import {
  loadFromStorageToState,
  saveToStorageFromState,
} from "../localstorage";
import reducer from "../reducers/reducer";
import throttle from "lodash/throttle";

const configureStore = () => {
  const persistedState = loadFromStorageToState();
  const store = createStore(reducer, persistedState);

  store.subscribe(
    throttle(() => {
      saveToStorageFromState(store.getState().todos || []);
    }, 1000)
  );

  return store;
};

export default configureStore;
