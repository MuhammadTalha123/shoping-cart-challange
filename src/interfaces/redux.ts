export interface InitialStateProps {
  items: ItemProps[];
  filteredItems: ItemProps[];
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
  payload: ItemProps[] | [];
}
