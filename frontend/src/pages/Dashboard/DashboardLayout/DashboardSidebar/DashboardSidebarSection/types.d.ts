export interface Item {
  path?: string;
  icon?: ReactNode;
  chip?: ReactNode;
  info?: ReactNode;
  children?: Item[];
  title: string;
}

export interface Section {
  title: string;
  items: Item[];
}
