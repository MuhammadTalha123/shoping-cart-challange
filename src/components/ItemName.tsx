import { Box, Text } from "@chakra-ui/react";

export const ItemName = ({ name }: { name: string }) => {
  return (
    <>
      <Box>
        <Text fontSize="lg">{name}</Text>
      </Box>
    </>
  );
};
