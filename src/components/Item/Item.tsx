import { Grid, GridItem } from "@chakra-ui/react";
import { ItemImg } from "../ItemImg";
import { ItemName } from "../ItemName";
import { ItemPrice } from "../ItemPrice";
import { ItemQuantity } from "../ItemQuantity";

import "./Item.css";

export const Item = () => {
  return (
    <Grid
      m={2}
      h="10em"
      w="50em"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
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
