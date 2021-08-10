import { Box, Text } from "@chakra-ui/react";

export const ItemName = ({ name }: { name: string }) => {
  return (
    <Box textAlign="left">
      <Text fontSize="lg">{name}</Text>
    </Box>
  );
};
