import { GridItem, Text } from "@chakra-ui/react";

export const ItemName = ({ name }: { name: string }) => {
  return (
    <>
      <GridItem colSpan={2}>
        <Text fontSize="lg">{name}</Text>
      </GridItem>
    </>
  );
};
