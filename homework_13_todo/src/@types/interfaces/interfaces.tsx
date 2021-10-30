export interface ITodoItem {
  text: string
  done: boolean,
  id: number
}

export interface IAppState {
  todoItems: ITodoItem[];
}

export interface IFormProps {
  onItemSubmit: (text: string) => void;
}

export interface IFormState {
  text: string;
}

export interface ITodoItem {
  text: string;
  done: boolean;
  id: number;
}

export interface IListProps {
  items: ITodoItem[];
  onItemDelete: (id: number) => void;
  onToggleDone: (id: number) => void;
}

export interface IItemProps {
  itemText: string;
  onItemDelete: (id: number) => void;
  onToggleDone: (id: number) => void;
  id: number;
  done: boolean;
}
