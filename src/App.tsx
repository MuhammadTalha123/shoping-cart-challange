import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const { items, filteredItems }: StateProps = useSelector(
    (state: StateProps) => state
  );

  useEffect(() => {
    getItems()
      .then((data: any) => {
        setLoading(true);
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
        setLoading(false);
      })
      .catch((err) => {
        alert("Error in fetching items");
        console.error(err);
      });
  }, []);

  return (
    <Flex alignItems="center" maxH="85vh" flexDir="column">
      <ColorFilter />
      {!loading ? (
        <RenderList items={filteredItems.length ? filteredItems : items} />
      ) : (
        "Loading......"
      )}
      <TotalAmount />
    </Flex>
  );
};

export default App;
