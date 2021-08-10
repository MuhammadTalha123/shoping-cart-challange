import { Box, Select } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { InitialStateProps } from "../interfaces/redux";

export const ColorFilter = () => {
  const { filterColors } = useSelector((state: InitialStateProps) => state);
  return (
    <Box mt="10" w="60">
      <Select placeholder="Available Colors">
        {filterColors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </Select>
    </Box>
  );
};
