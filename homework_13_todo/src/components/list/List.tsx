import React from "react";
import "./List.css";

interface ITodoItem {
  text: string
  done: boolean,
  id: number
}

interface IListProps {
  items: ITodoItem[];
}

class List extends React.Component<IListProps> {
  render() {
    const elements = this.props.items.map((item: ITodoItem) =>
      <li key={ item.id } className="item list__item">
          <span className="list__text">
            <i className="list__icon far fa-calendar-alt"/>
            <span className="list__span">{ item.text }</span>
          </span>
        <button className="list__button" type="button">Done</button>
        <button className="list__button list__button_trash" type="button">
          <i className="far fa-trash-alt"/>
        </button>
      </li>
    );
    return (
      <ul className="list app__list">
        { elements }
      </ul>
    );
  }
}

export default List;
