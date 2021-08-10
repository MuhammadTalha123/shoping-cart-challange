import { GridItem } from "@chakra-ui/react";

export const ItemName = ({ name }: { name: string }) => {
  return (
    <>
      <GridItem colSpan={2} bg="blue">
        Item name will be here
      </GridItem>
    </>
  );
};
