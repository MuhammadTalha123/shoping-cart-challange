import { ChangeEventHandler } from "react";
import { Box, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ItemProps, StateProps } from "../interfaces";
import { setFilteredItems } from "../redux/actions";
import { Dispatch } from "redux";

interface ColorFilterProps {}

export const ColorFilter: React.FC<ColorFilterProps> = () => {
  const { filterColors, items }: StateProps = useSelector(
    (state: StateProps) => state
  );
  const dispatch: Dispatch<any> = useDispatch();

  const onChangeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedValue: string = event.target.value;
    const filteredItems: ItemProps[] = items.filter(
      (item) => item.colour === selectedValue
    );
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
