import { Box, Button, Text, Flex, useMediaQuery } from "@chakra-ui/react";
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
  const [isLargerThan500] = useMediaQuery("(max-width: 500px)");
  const { items } = useSelector((state: InitialStateProps) => state);

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
      <Box width="24%" borderLeft="1px solid black" ml="1">
        <Flex
          alignItems="center"
          justifyContent="center"
          height="100%"
          direction={isLargerThan500 ? "column" : "row"}
        >
          <Button
            bg="transparent"
            size="lg"
            variant="unstyled"
            outline="none"
            // margin="5px"
            onClick={handleIncreaseQuantity}
          >
            +
          </Button>
          <Text fontSize="lg" m="2">
            {selected}
          </Text>
          <Button
            bg="transparent"
            outline="none"
            border="none"
            size="lg"
            variant="unstyled"
            // margin="5px"
            onClick={handleDecreaseQuantity}
          >
            -
          </Button>
        </Flex>
      </Box>
    </>
  );
};
