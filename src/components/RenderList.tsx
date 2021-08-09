import { StackDivider, VStack } from "@chakra-ui/react";
import { Item } from "./Item/Item";

export const RenderList = () => {
  return (
    <>
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
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </VStack>
    </>
  );
};
