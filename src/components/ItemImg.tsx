import { Box, Image } from "@chakra-ui/react";

export const ItemImg = ({ img }: { img: string }) => {
  return (
    <>
      <Box width={{ base: "25%", md: "10%" }}>
        <Image src={img} h="160" w="250" objectFit="cover" alt="Model Image" />
      </Box>
    </>
  );
};
