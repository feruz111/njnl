import { saveStateCount } from "./../utils/utils";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { loadState } from "../utils/utils";
import { countReducer } from "./count-reducer";

const persistedState = loadState();

const rootReducer = combineReducers({
  count: countReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveStateCount({ count: store.getState().count });
});

export type AppStoreType = typeof store;
