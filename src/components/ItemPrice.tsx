import { Box, Text } from "@chakra-ui/react";

interface ItemPriceProps {
  price: number;
}

export const ItemPrice: React.FC<ItemPriceProps> = ({ price }) => (
  <Box>
    <Text fontSize="md" textAlign="left" fontWeight="bold">
      Price: €{price}
    </Text>
  </Box>
);
