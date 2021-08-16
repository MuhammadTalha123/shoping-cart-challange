import React from "react";
import { render, screen } from "@testing-library/react";
import { RenderList } from "../../components/RenderList";
import { getItems } from "../../api/GetItem";
import { Item } from "../../components/Item";
import { ItemProps } from "../../interfaces";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const ReduxProvider = ({ children, store }: any) => (
  <Provider store={store}>{children}</Provider>
);

test("It should render the Item", async () => {
  const items: ItemProps[] = await getItems();
  const item = items[0];
  render(
    <ReduxProvider store={store}>
      <Item item={item} />
    </ReduxProvider>
  );
  const itemNameElem = screen.getByText(item?.name);
  expect(itemNameElem).toBeVisible();
});
