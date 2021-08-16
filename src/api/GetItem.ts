import { getItemsEndPoint } from "./../constants/api";
import { ItemProps } from "./../interfaces/index";
export const getItems = () => {
  return new Promise((resolve: (value: ItemProps[]) => void, reject) => {
    fetch(getItemsEndPoint)
      .then((data) => data.json())
      .then(resolve)
      .catch((err) => reject(err));
  });
};
