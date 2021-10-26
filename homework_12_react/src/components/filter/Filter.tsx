import React from "react";
import "./Filter.css";

interface IFilterData {
  id: string;
  name: string;
}

interface IFilterProps {
  legend: string;
  items: IFilterData[];
}

class Filter extends React.Component<IFilterProps> {
  render() {
    const { legend, items } = this.props;

    const elements = items.map((item, index) => (
      <li className="filter__value" key={ item.id }>
        <input className="filter__input" type="checkbox" id={ `grand-piano-${ index }` }/>
        <label className="filter__label" htmlFor={ `grand-piano-${ index }` }>{ item.name }</label>
      </li>
    ));

    return (
      <fieldset className="sidebar__filter filter">
        <legend className="filter__category">{ legend }</legend>
        <ul className="filter__values">
          { elements }
        </ul>
      </fieldset>
    )
  }
}

export default Filter;
