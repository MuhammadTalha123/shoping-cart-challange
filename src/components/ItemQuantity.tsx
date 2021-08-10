import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateProps, ItemProps } from "../interfaces/redux";
import { setItems } from "../redux/actions";

export const ItemQuantity = ({
  id,
  selected,
}: {
  id: number;
  selected: number;
}) => {
  const { items, filteredItems } = useSelector(
    (state: InitialStateProps) => state
  );

  useEffect(() => {
    // console.log("UpdateCount", items);
  }, [items]);
  const dispatch = useDispatch();
  // Get all items
  // update the Item
  // Set updated in redux
  const handleIncreaseQuantity = () => {
    const updatedArr: any = items?.map((item: ItemProps) => {
      if (item?.id === id) {
        if (item.selected === 0 || item.selected > 0) {
          item.selected += 1;
        }
      }
      return item;
    });
    dispatch(setItems(updatedArr));
  };
  const handleDecreaseQuantity = () => {
    const updatedArr: any = items?.map((item: ItemProps) => {
      if (item?.id === id) {
        if (item.selected && item.selected > 0) {
          item.selected -= 1;
        }
      }
      return item;
    });
    dispatch(setItems(updatedArr));
  };

  return (
    <>
      <Box width="25%">
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Button
            bg="transparent"
            size="lg"
            margin="5px"
            onClick={handleIncreaseQuantity}
          >
            +
          </Button>
          <Text fontSize="lg" margin="5px">
            {selected}
          </Text>
          <Button
            bg="transparent"
            size="lg"
            margin="5px"
            onClick={handleDecreaseQuantity}
          >
            -
          </Button>
        </Flex>
      </Box>
    </>
  );
};
