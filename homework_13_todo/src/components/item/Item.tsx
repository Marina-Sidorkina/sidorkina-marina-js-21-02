import React from "react";
import "./Item.css";

interface IItemProps {
  itemText: string;
  onItemDelete: (id: number) => void;
  onToggleDone: (id: number) => void;
  id: number;
  done: boolean;
}

class Item extends React.Component<IItemProps> {
  readonly id: number;

  constructor(props: IItemProps) {
    super(props);

    this.id = this.props.id;
    this.onTrashButtonClick = this.onTrashButtonClick.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
  }

  onTrashButtonClick() {
    this.props.onItemDelete(this.id)
  }

  onToggleDone() {
    this.props.onToggleDone(this.id);
  }
  render() {
    let classNames = "item__span";

    if (this.props.done) {
      classNames += " item__span_done";
    }

    return (
      <li className="item list__item">
          <span className="item__text">
            <i className="item__icon far fa-calendar-alt"/>
            <span className={ classNames }>{ this.props.itemText }</span>
          </span>
        <button className="item__button"
                type="button"
                onClick={ this.onToggleDone }>Done</button>
        <button className="item__button item__button_trash"
                type="button"
                onClick={ this.onTrashButtonClick }>
          <i className="far fa-trash-alt"/>
        </button>
      </li>
    );
  }
}

export default Item;
