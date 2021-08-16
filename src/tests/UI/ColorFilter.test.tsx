import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ColorFilter } from "../../components/ColorFilter";

const ReduxProvider = ({ children, store }: any) => (
  <Provider store={store}>{children}</Provider>
);

test("It should render the select color filter", async () => {
  render(
    <ReduxProvider store={store}>
      <ColorFilter />
    </ReduxProvider>
  );
  const itemNameElem = screen.getByText("All Available Colors");
  expect(itemNameElem).toBeVisible();
});
