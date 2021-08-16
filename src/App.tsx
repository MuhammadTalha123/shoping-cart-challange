import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getItems } from "./api/GetItem";
import { ColorFilter } from "./components/ColorFilter";
import { RenderList } from "./components/RenderList";
import { TotalAmount } from "./components/TotalAmount";
import { StateProps, ItemProps } from "./interfaces";
import { setFilterColors, setItems } from "./redux/actions";

const App = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { items, filteredItems }: StateProps = useSelector(
    (state: StateProps) => state
  );

  useEffect(() => {
    getItems().then((data: any) => {
      let filterColors: string[] = [];
      const updatedData = data?.map((item: ItemProps) => {
        const exists = filterColors.find((color) => color === item.colour);
        if (!exists) {
          filterColors.push(item.colour);
        }
        return {
          ...item,
          selected: 0,
        };
      });
      dispatch(setItems(updatedData));
      dispatch(setFilterColors(filterColors));
    });
  }, []);

  return (
    <Flex alignItems="center" maxH="85vh" flexDir="column">
      <ColorFilter />
      <RenderList items={filteredItems.length ? filteredItems : items} />
      <TotalAmount />
    </Flex>
  );
};

export default App;
