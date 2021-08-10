import { Box, Image } from "@chakra-ui/react";

export const ItemImg = ({ img }: { img: string }) => {
  return (
    <>
      <Box width="25%">
        <Image src={img} h="160" w="250" alt="Model Image" />
      </Box>
    </>
  );
};
