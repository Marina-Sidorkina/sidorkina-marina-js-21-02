import React from "react";
import "./Category.css";
import { ICategoryProps } from "../../interfaces/interfaces";

class Category extends React.Component<ICategoryProps> {
  render() {
    const { title, message, href } = this.props;

    return (
      <div className="category categories__item">
        <a className="category__link" href={ href }><h4 className="category__title">{ title }</h4></a>
        <p className="category__message">{ message }</p>
      </div>
    )
  }
}

export default Category;
