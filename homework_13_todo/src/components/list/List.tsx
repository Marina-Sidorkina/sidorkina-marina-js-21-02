import React from "react";
import "./List.css";
import Item from "../item/Item";
import { ITodoItem, IListProps } from "../../@types/interfaces/interfaces";

class List extends React.Component<IListProps> {
  constructor(props: IListProps) {
    super(props);

    this.onItemDelete = this.onItemDelete.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
  }

  onItemDelete(id: number) {
    this.props.onItemDelete(id)
  }

  onToggleDone(id: number) {
    this.props.onToggleDone(id);
  }

  render() {
    const elements = this.props.items.map((item: ITodoItem) =>
      <Item key={ item.id }
            id={ item.id }
            itemText={ item.text }
            onItemDelete={ this.onItemDelete }
            onToggleDone={ this.onToggleDone }
            done={ item.done }/>
    );

    return (
      <ul className="list app__list">
        { elements }
      </ul>
    );
  }
}

export default List;
