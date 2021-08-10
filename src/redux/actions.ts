import { ItemProps } from "./../interfaces/redux";

export const setItems = (payload: ItemProps[]) => ({
  type: "SET_ITEMS",
  payload,
});

export const setFilterColors = (payload: string[]) => ({
  type: "SET_FILTERE_COLORS",
  payload,
});

export const setFilteredItems = (payload: ItemProps[]) => ({
  type: "SET_FILTERED_ITEMS",
  payload,
});
