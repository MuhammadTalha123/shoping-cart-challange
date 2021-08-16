import { ChangeEventHandler } from "react";
import { Box, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../interfaces/redux";
import { setFilteredItems } from "../redux/actions";

export const ColorFilter = () => {
  const { filterColors, items }: StateProps = useSelector(
    (state: StateProps) => state
  );
  const dispatch = useDispatch();
  const onChangeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedValue = event.target.value;
    const filteredItems = items.filter((item) => item.colour === selectedValue);
    dispatch(setFilteredItems(filteredItems));
  };
  return (
    <Box mt="10" w="60">
      <Select placeholder="All Available Colors" onChange={onChangeHandler}>
        {filterColors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </Select>
    </Box>
  );
};
