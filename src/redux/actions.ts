import { ItemProps } from "../interfaces";

export const setItems: (payload: ItemProps[]) => {
  type: string;
  payload: ItemProps[];
} = (payload: ItemProps[]) => ({
  type: "SET_ITEMS",
  payload,
});

export const setFilterColors: (payload: string[]) => {
  type: string;
  payload: string[];
} = (payload: string[]) => ({
  type: "SET_FILTERE_COLORS",
  payload,
});

export const setFilteredItems: (payload: ItemProps[]) => {
  type: string;
  payload: ItemProps[];
} = (payload: ItemProps[]) => ({
  type: "SET_FILTERED_ITEMS",
  payload,
});
