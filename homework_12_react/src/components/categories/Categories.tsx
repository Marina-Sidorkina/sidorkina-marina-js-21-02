import React from "react";
import "./Categories.css";
import { ICategoriesProps } from "../../interfaces/interfaces";
import Category from "../category/Category";

class Categories extends React.Component<ICategoriesProps> {
  render() {
    const { categories } = this.props;

    const elements = categories.map((item) =>
      <Category key={ item.key }
                title={ item.title }
                message={ item.message }
                href={ item.href }/>);

    return (
      <div className="categories">
        { elements }
      </div>
    )
  }
}

export default Categories;
