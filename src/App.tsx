import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "./api/GetItem";
import { ColorFilter } from "./components/ColorFilter";
import { RenderList } from "./components/RenderList";
import { TotalAmount } from "./components/TotalAmount";
import { InitialStateProps, ItemProps } from "./interfaces/redux";
import { setItems } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  const { items, filteredItems } = useSelector(
    (state: InitialStateProps) => state
  );

  useEffect(() => {
    getItems().then((data: any) => {
      console.log(data);
      const updatedData = data?.map((data: ItemProps) => ({
        ...data,
        selected: 0,
      }));
      dispatch(setItems(updatedData));
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
