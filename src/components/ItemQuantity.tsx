import { GridItem, Button, Text, Flex } from "@chakra-ui/react";

export const ItemQuantity = ({ id }: { id: number }) => {
  return (
    <>
      <GridItem rowSpan={2} colSpan={1}>
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Button bg="transparent" size="lg" margin="5px">
            +
          </Button>
          <Text fontSize="lg" margin="5px">
            0
          </Text>
          <Button bg="transparent" size="lg" margin="5px">
            -
          </Button>
        </Flex>
      </GridItem>
    </>
  );
};
