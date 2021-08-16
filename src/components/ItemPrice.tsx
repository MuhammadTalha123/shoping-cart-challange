import { Box, Text } from "@chakra-ui/react";

interface ItemPriceProps {
  price: number;
}

export const ItemPrice: React.FC<ItemPriceProps> = ({ price }) => {
  return (
    <Box>
      <Text fontSize="lg" textAlign="left">
        Price: €{price}
      </Text>
    </Box>
  );
};
