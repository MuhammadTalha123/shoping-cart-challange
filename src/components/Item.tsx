import { Flex, useMediaQuery } from "@chakra-ui/react";
import { ItemProps } from "../interfaces/redux";
import { ItemImg } from "./ItemImg";
import { ItemName } from "./ItemName";
import { ItemPrice } from "./ItemPrice";
import { ItemQuantity } from "./ItemQuantity";

export const Item = ({ item }: { item: ItemProps }) => {
  const [isLargerThan500] = useMediaQuery("(max-width: 500px)");
  return (
    <Flex
      m={{ base: "0", md: "2" }}
      h="10em"
      // w={{ base: "100%", md: "100%" }}
      w={isLargerThan500 ? "100%" : "60%"}
      // direction={{ base: "column", md: "row" }}
      justifyContent="center"
      shadow="md"
    >
      <ItemImg img={item?.img} />
      <Flex
        direction="column"
        justifyContent="space-around"
        ml="10px"
        width="50%"
      >
        <ItemName name={item?.name} />
        <ItemPrice price={item?.price} />
      </Flex>
      <ItemQuantity id={item?.id} selected={item?.selected} />
    </Flex>
  );
};
