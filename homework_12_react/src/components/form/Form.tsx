import React from "react";
import "./Form.css";
import Filter from "../filter/Filter";
import { IFormItems, IFormProps } from "../../@types/interfaces/interfaces";

class Form extends React.Component<IFormProps> {
  render() {
    const { filters } = this.props;

    const elements = filters.map((item: IFormItems) =>
      <Filter key={ item.id } legend={ item.legend } items={ item.items } />);

    return (
      <form className="sidebar">
        { elements }
      </form>
    )
  }
}

export default Form;
