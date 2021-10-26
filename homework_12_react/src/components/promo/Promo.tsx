import React from "react";
import "./Promo.css";
import { IPromoProps } from "../../interfaces/interfaces";

class Promo extends React.Component<IPromoProps> {
  render() {
    const { title, message } = this.props;

    return (
      <div className="promo">
        <h2 className="promo__title">{ title }</h2>
        <p className="promo__message">{ message }</p>
      </div>
    )
  }
}

export default Promo;
