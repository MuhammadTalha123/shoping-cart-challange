import { Box, Heading } from "@chakra-ui/react";

export const TotalAmount = () => {
  return (
    <Box
      position="fixed"
      borderTop="2px solid red"
      width="48vw"
      bottom="5"
      textAlign="right"
    >
      <Heading display="inline-block" as="h3">
        $1 Total
      </Heading>
    </Box>
  );
};
