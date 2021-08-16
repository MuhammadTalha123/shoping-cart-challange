import { Flex, useMediaQuery } from "@chakra-ui/react";
import { ItemProps } from "../interfaces";
import { ItemImg } from "./ItemImg";
import { ItemName } from "./ItemName";
import { ItemPrice } from "./ItemPrice";
import { ItemQuantity } from "./ItemQuantity";

interface ListItemProps {
  item: ItemProps;
}

export const Item: React.FC<ListItemProps> = ({ item }) => {
  const [isLarger]: boolean[] = useMediaQuery("(max-width: 500px)");

  return (
    <Flex
      m={{ base: "0", md: "2" }}
      h="10em"
      w={isLarger ? "100%" : "70%"}
      justifyContent="center"
      shadow="md"
      boxShadow="lg"
      _hover={{
        boxShadow: "2xl",
        cursor: "pointer",
        bg: "#e5e5e5",
      }}
      transition="ease-in 0.3s"
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
