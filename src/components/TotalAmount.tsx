import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateProps, ItemProps } from "../interfaces";

interface TotalAmountProps {}

export const TotalAmount: React.FC<TotalAmountProps> = () => {
  const [total, setTotal] = useState(0);
  const { items }: StateProps = useSelector((state: StateProps) => state);

  useEffect(() => {
    let total: number = 0;
    items.forEach((item: ItemProps) => (total += item.selected * item.price));
    setTotal(Math.round(total));
  }, [items]);

  return (
    <Box
      position="fixed"
      borderTop="2px solid black"
      width="48vw"
      bottom="5"
      textAlign="right"
    >
      <Text fontSize="3xl">€{total} Total</Text>
    </Box>
  );
};
