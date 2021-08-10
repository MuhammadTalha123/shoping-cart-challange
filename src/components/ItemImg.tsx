import { GridItem, Image } from "@chakra-ui/react";

export const ItemImg = ({ img }: { img: string }) => {
  return (
    <>
      <GridItem rowSpan={2} colSpan={1} >
        
        <Image src={img} h="160" w="200" alt="Model Image" />
      </GridItem>
    </>
  );
};
