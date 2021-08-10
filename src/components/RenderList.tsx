import { Box, StackDivider, VStack } from "@chakra-ui/react";
import { ItemProps } from "../interfaces/redux";
import { Item } from "./Item";

export const RenderList = ({ items = [] }: { items: ItemProps[] }) => {
  return (
    <>
      <Box
        overflowY="auto"
        maxW="80vw"
        maxH="80vh"
        mt="10"
        p="10"
        shadow="lg"
        border="2px solid red"
      >
        <VStack
          divider={
            <StackDivider
              borderColor="black.500"
              shadow="dark-lg"
              width="30%"
              alignSelf="center"
            />
          }
          spacing={4}
          align="center"
        >
          {items?.length
            ? items.map((item) => <Item item={item} key={item?.id} />)
            : "No items"}
        </VStack>
      </Box>
    </>
  );
};
