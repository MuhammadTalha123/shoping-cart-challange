import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InitialStateProps } from "../interfaces/redux";

export const TotalAmount = () => {
  const [total, setTotal] = useState(0);
  const { items, filteredItems } = useSelector(
    (state: InitialStateProps) => state
  );

  useEffect(() => {
    let total = 0;
    items.forEach((item) => (total += item.selected * item.price));
    setTotal(Math.round(total));
  }, [items]);
  return (
    <Box
      position="fixed"
      borderTop="2px solid red"
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
