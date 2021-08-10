import { GridItem, Text } from "@chakra-ui/react";

export const ItemPrice = ({ price }: { price: number }) => {
  return (
    <>
      <GridItem colSpan={2} >
        <Text fontSize="lg">€{price}</Text>
      </GridItem>
    </>
  );
};
