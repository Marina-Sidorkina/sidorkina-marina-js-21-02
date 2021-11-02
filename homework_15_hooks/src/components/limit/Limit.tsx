import React from "react";
import "./Limit.scss";
import { ILimitProps } from "../../@types/interfaces/components";

const Limit = (props: ILimitProps) => {
  const onValueChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const select = evt.target as HTMLSelectElement;
    const value = select.options[select.selectedIndex].value;
    props.onValueChange(parseInt(value, 10));
  }

  return (
    <form className="limit">
      <label htmlFor="limit-select">Показывать по</label>
      <select name="limit__select" id="limit-select"
              onChange={ (evt) => onValueChange(evt) }>
        <option className="limit__option" value="10">10 элеметов</option>
        <option className="limit__option" value="20">20 элементов</option>
      </select>
    </form>
  );
}

export default Limit;
