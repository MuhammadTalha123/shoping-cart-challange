import { Box, Image } from "@chakra-ui/react";

interface ItemImgProps {
  img: string;
}

export const ItemImg: React.FC<ItemImgProps> = ({ img }) => {
  return (
    <Box width={{ base: "25%", md: "25%" }}>
      <Image src={img} h="160" w="full" objectFit="contain" alt="Model Image" />
    </Box>
  );
};
