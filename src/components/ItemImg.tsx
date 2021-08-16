import { Box, Image, useMediaQuery } from "@chakra-ui/react";

interface ItemImgProps {
  img: string;
}

export const ItemImg: React.FC<ItemImgProps> = ({ img }) => {
  const [isLarger]: boolean[] = useMediaQuery("(max-width: 500px)");

  return (
    <Box width={{ base: isLarger ? "30%" : "45%", md: "25%" }}>
      <Image
        src={img}
        h="160"
        w="full"
        objectFit="cover"
        alt="Model Image"
        onClick={() => window.open(img)}
      />
    </Box>
  );
};
