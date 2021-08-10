import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InitialStateProps, ItemProps } from "../interfaces/redux";

export const TotalAmount = () => {
  const [total, setTotal] = useState(0);
  const { items } = useSelector((state: InitialStateProps) => state);

  useEffect(() => {
    let total = 0;
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
      <Heading display="inline-block" as="h3">
        €{total} Total
      </Heading>
    </Box>
  );
};
