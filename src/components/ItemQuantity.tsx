import { Box, Button, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { StateProps, ItemProps } from "../interfaces";
import { setItems } from "../redux/actions";

interface ItemQuantityProps {
  id: number;
  selected: number;
}

export const ItemQuantity: React.FC<ItemQuantityProps> = ({ id, selected }) => {
  const [isLargerThan500]: boolean[] = useMediaQuery("(max-width: 700px)");
  const { items }: StateProps = useSelector((state: StateProps) => state);

  const dispatch: Dispatch<any> = useDispatch();

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
          onClick={handleDecreaseQuantity}
        >
          -
        </Button>
      </Flex>
    </Box>
  );
};
