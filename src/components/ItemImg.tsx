import { GridItem, Image } from "@chakra-ui/react";

export const ItemImg = ({ img }: { img: string }) => {
  return (
    <>
      <GridItem rowSpan={2} colSpan={1} >
        
        <Image src={img} h="200" w="200" alt="Segun Adebayo" align="center" justifyContent="center" />
      </GridItem>
    </>
  );
};
