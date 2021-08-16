import { createStore, Store } from "redux";
import { ActionProps, StateProps } from "../interfaces";
import { Reducer } from "./reducer";

export const store: Store<StateProps, ActionProps> = createStore(Reducer);
