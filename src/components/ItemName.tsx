import { Box, Text } from "@chakra-ui/react";

interface ItemNameProps {
  name: string;
}

export const ItemName: React.FC<ItemNameProps> = ({ name }) => (
  <Box textAlign="left" overflowY="auto">
    <Text fontSize="md" fontWeight="medium">
      {name}
    </Text>
  </Box>
);
