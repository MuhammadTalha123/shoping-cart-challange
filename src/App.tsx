import { Flex } from "@chakra-ui/react";
import { ColorFilter } from "./components/ColorFilter";
import { RenderList } from "./components/RenderList";
import { TotalAmount } from "./components/TotalAmount";

const App = () => {
  return (
    <Flex alignItems="center" maxH="85vh" flexDir="column">
      <ColorFilter />
      <RenderList />
      <TotalAmount />
    </Flex>
  );
};

export default App;
