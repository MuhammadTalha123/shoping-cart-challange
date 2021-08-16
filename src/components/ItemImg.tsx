import { Box, Image, useMediaQuery } from "@chakra-ui/react";

interface ItemImgProps {
  img: string;
}

export const ItemImg: React.FC<ItemImgProps> = ({ img }) => {
  const [isLarger]: boolean[] = useMediaQuery("(max-width: 700px)");

  return (
    <Box width={{ base: "25%", md: "25%" }}>
      <Image
        src={img}
        h="160"
        w="full"
        objectFit={isLarger ? "cover" : "contain"}
        alt="Model Image"
      />
    </Box>
  );
};
