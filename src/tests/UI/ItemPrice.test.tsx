import React from "react";
import { render, screen } from "@testing-library/react";
import { ItemPrice } from "../../components/ItemPrice";

test("It should render the item price", async () => {
  const price = 15;
  render(<ItemPrice price={price} />);
  const resultElem = screen.getByText(`Price: €${price}`);
  expect(resultElem).toBeVisible();
});
