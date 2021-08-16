import { Box, Text } from "@chakra-ui/react";

export const ItemPrice = ({ price }: { price: number }) => {
  return (
    <Box>
      <Text fontSize="lg" textAlign="right">
        Price: €{price}
      </Text>
    </Box>
  );
};
