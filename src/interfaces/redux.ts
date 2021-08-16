export interface StateProps {
  items: ItemProps[];
  filteredItems: ItemProps[];
  filterColors: string[];
}

export interface ItemProps {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
  selected: number;
}

export interface ActionProps {
  type: string;
  payload: any;
}
