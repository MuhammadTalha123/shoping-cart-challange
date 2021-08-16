import React from "react";
import { render, screen } from "@testing-library/react";
import { getItems } from "../../api/GetItem";
import { ItemProps } from "../../interfaces";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ItemQuantity } from "../../components/ItemQuantity";

const ReduxProvider = ({ children, store }: any) => (
  <Provider store={store}>{children}</Provider>
);

test("It should render the total amount count", async () => {
  const items: ItemProps[] = await getItems();
  const item = items[0];
  render(
    <ReduxProvider store={store}>
      <ItemQuantity id={item?.id} selected={item?.selected} />
    </ReduxProvider>
  );
  const plusCountIndicator = screen.getByText("+");
  const minusCountIndicator = screen.getByText("-");
  expect(plusCountIndicator).toBeVisible();
  expect(minusCountIndicator).toBeVisible();
});
