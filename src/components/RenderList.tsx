import { Box, StackDivider, VStack } from "@chakra-ui/react";
import { ItemProps } from "../interfaces/redux";
import { Item } from "./Item";

interface RenderListProps {
  items: ItemProps[];
}

export const RenderList: React.FC<RenderListProps> = ({ items = [] }) => {
  return (
    <>
      {items.length ? (
        <Box
          overflowY="auto"
          minW={{ base: "95vw", md: "80vw" }}
          maxH="80vh"
          mt="10"
          p="10"
          shadow="lg"
          css={{
            "&::-webkit-scrollbar": {
              width: "7px",
            },
            "&::-webkit-scrollbar-track": {
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "lightgray",
              borderRadius: "24px",
            },
          }}
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
            {items.map((item) => (
              <Item item={item} key={item?.id} />
            ))}
          </VStack>
        </Box>
      ) : (
        <Box mt="20">Loading Items .......</Box>
      )}
    </>
  );
};
