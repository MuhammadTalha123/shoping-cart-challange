import { Flex } from "@chakra-ui/react";
import { ColorFilter } from "./components/ColorFilter";
import { RenderList } from "./components/RenderList";

const App = () => {
  return (
    <Flex alignItems="center" maxH="80vh" flexDir="column">
      <ColorFilter />
      <RenderList />
    </Flex>
  );
};

export default App;
