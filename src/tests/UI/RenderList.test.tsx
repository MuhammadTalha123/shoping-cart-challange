import React from "react";
import { render, screen } from "@testing-library/react";
import { RenderList } from "../../components/RenderList";
import { getItems } from "../../api/GetItem";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ItemProps } from "../../interfaces";

const ReduxProvider = ({ children, store }: any) => (
  <Provider store={store}>{children}</Provider>
);

test("It should render the list", async () => {
  const items: ItemProps[] = await getItems();
  render(
    <ReduxProvider store={store} children={<RenderList items={items} />} />
  );
  for (let index = 0; index < items.length; index++) {
    const { name } = items[index];
    const itemNameElem = screen.getByText(name);
    expect(itemNameElem).toBeVisible();
  }
});

test("It should render No Items for empty list", async () => {
  render(<ReduxProvider store={store} children={<RenderList items={[]} />} />);
  const elem = screen.getByText("No Items");
  expect(elem).toBeVisible();
});
