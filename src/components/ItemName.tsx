import { Box, Text } from "@chakra-ui/react";

interface ItemNameProps {
  name: string;
}

export const ItemName: React.FC<ItemNameProps> = ({ name }) => {
  return (
    <Box textAlign="left">
      <Text fontSize="lg">{name}</Text>
    </Box>
  );
};
