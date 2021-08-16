import { ActionProps, StateProps } from "../interfaces";

export const initialState: StateProps = {
  items: [],
  filteredItems: [],
  filterColors: [],
};

export const Reducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        items: action.payload,
      };

    case "SET_FILTERE_COLORS":
      return {
        ...state,
        filterColors: action.payload,
      };

    case "SET_FILTERED_ITEMS":
      return {
        ...state,
        filteredItems: action.payload,
      };

    default:
      return state;
  }
};
