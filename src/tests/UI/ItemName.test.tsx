import React from "react";
import { render, screen } from "@testing-library/react";
import { ItemName } from "../../components/ItemName";

test("It should render the name", async () => {
  const name = "Amir Ali";
  render(<ItemName name={name} />);
  const resultElem = screen.getByText(name);
  expect(resultElem).toBeVisible();
});
