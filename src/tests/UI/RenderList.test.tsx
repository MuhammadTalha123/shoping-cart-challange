import React from "react";
import { render, screen } from "@testing-library/react";
import { RenderList } from "../../components/RenderList";
import { getItems } from "../../api/GetItem";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const ReduxProvider = ({ children, store }: any) => (
  <Provider store={store}>{children}</Provider>
);

test("It should render the list", async () => {
  const items = await getItems();
  render(
    <ReduxProvider store={store} children={<RenderList items={items} />} />
  );
  for (let index = 0; index < items.length; index++) {
    const { name } = items[index];
    const itemName = screen.getByText(name);
    expect(itemName).toBeVisible();
  }
});
