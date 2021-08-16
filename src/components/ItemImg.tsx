import { Box, Image } from "@chakra-ui/react";

export const ItemImg = ({ img }: { img: string }) => {
  return (
    <Box width={{ base: "25%", md: "25%" }}>
      <Image src={img} h="160" w="300" objectFit="cover" alt="Model Image" />
    </Box>
  );
};
