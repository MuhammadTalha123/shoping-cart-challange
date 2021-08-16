import React from "react";
import { render, screen } from "@testing-library/react";
import { getItems } from "../../api/GetItem";
import { ItemProps } from "../../interfaces";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { TotalAmount } from "../../components/TotalAmount";

const ReduxProvider = ({ children, store }: any) => (
  <Provider store={store}>{children}</Provider>
);

test("It should render the total amount count", async () => {
  const items: ItemProps[] = await getItems();
  const item = items[0];
  render(
    <ReduxProvider store={store}>
      <TotalAmount />
    </ReduxProvider>
  );
  const itemNameElem = screen.getByText("€0 Total");
  expect(itemNameElem).toBeVisible();
});
