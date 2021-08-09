import { ItemImg } from "../ItemImg";
import { ItemName } from "../ItemName";
import { ItemPrice } from "../ItemPrice";
import { ItemQuantity } from "../ItemQuantity";

import "./Item.css";

export const Item = () => {
  return (
    <div>
      <div>
        <ItemImg />
        <ItemName />
        <ItemPrice />
      </div>
      <ItemQuantity />
    </div>
  );
};
