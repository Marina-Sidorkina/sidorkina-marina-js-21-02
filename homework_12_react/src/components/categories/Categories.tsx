import React from "react";
import "./Categories.css";
import { ICategoriesProps } from "../../interfaces/interfaces";

class Categories extends React.Component<ICategoriesProps> {
  render() {
    const { categories } = this.props;

    return (
      <div className="categories">
        <div className="category categories__item">
          <a className="category__link" href="#"><h4 className="category__title">Пианино</h4></a>
          <p className="category__message">Выбор для учебы</p>
        </div>
        <div className="category categories__item">
          <a className="category__link" href="#"><h4 className="category__title">Рояли</h4></a>
          <p className="category__message">Выбор профессионала</p>
        </div>
      </div>
    )
  }
}

export default Categories;
