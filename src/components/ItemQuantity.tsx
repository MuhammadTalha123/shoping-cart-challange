import { GridItem } from "@chakra-ui/react";

export const ItemQuantity = ({ id }: { id: number }) => {
  return (
    <>
      <GridItem rowSpan={2} colSpan={1} bg="pink">
        Item quantity will be here
      </GridItem>
    </>
  );
};
