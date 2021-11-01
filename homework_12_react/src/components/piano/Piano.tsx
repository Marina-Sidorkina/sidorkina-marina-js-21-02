import React from "react";
import "./Piano.css";
import { IPianoProps } from "../../@types/interfaces/interfaces";

class Piano extends React.Component<IPianoProps> {
  render() {
    const { name, src, href } = this.props;

    return (
      <li className="piano">
        <img className="piano__img" src={ src } alt="Фото инструмента" width="70" height="70"/>
        <a className="piano__title-link" href={ href }><h4 className="piano__title">{ name }</h4></a>
        <a className="piano__button" href={ href }>Подробнее</a>
      </li>
    )
  }
}

export default Piano;
