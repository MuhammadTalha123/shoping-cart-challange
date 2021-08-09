import { ActionProps, InitialStateProps } from "./../interfaces/redux";

export const initialState: InitialStateProps = {
  items: [],
  filteredItems: [],
};

export const Reducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        items: action.payload,
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
