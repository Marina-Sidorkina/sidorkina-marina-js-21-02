import React from "react";
import "./Favourite.css";
import { IFavouriteProps } from "../../@types/interfaces/interfaces";
import Piano from "../piano/Piano";

class Favourite extends React.Component<IFavouriteProps> {
  render() {
    const { favourites } = this.props;

    const elements = favourites.map((item) =>
      <Piano  key={ item.key }
              name={ item.name}
              href={ item.href }
              src={ item.src }/>);
    return (
      <div className="favourite">
        <h3 className="favourite__title">Популярные</h3>
        <ul className="favourite__items">
          { elements }
        </ul>
      </div>
    )
  }
}

export default Favourite;
