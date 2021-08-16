import { Box, StackDivider, VStack } from "@chakra-ui/react";
import { ItemProps } from "../interfaces";
import { Item } from "./Item";

interface RenderListProps {
  items: ItemProps[];
}

export const RenderList: React.FC<RenderListProps> = ({ items = [] }) => (
  <>
    {items.length ? (
      <Box
        overflowY="auto"
        mt="10"
        p="10"
        minW="40%"
        shadow="lg"
        h="auto"
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
