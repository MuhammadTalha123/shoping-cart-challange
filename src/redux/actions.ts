import { ActionProps } from "./../interfaces/redux";

export const setItems = (payload: ActionProps) => ({
  type: "SET_ITEMS",
  payload,
});
