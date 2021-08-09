import { Grid, GridItem } from "@chakra-ui/react";
import { ItemImg } from "./ItemImg";
import { ItemName } from "./ItemName";
import { ItemPrice } from "./ItemPrice";
import { ItemQuantity } from "./ItemQuantity";

export const Item = () => {
  return (
    <Grid
      m={{ base: "1", md: "2" }}
      h="10em"
      w={{ base: "100%", md: "100%" }}
      templateRows={{ base: "repeat(6, 1fr)", md: "repeat(2, 1fr)" }}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
      gap={4}
      shadow="md"
    >
      <ItemImg />
      <ItemName />
      <ItemQuantity />
      <ItemPrice />
    </Grid>
  );
};
