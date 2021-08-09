import { Box, Select } from "@chakra-ui/react";

export const ColorFilter = () => {
  return (
    <Box mt="10">
      <Select
        bg="tomato"
        borderColor="tomato"
        color="white"
        placeholder="Filter Items By Color !"
        outline="none"
      />
    </Box>
  );
};
