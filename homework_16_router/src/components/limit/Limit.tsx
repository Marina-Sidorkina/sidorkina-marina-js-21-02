import React from "react";
import "./Limit.scss";
import { ILimitProps } from "../../@types/interfaces/components";

const Limit = (props: ILimitProps) => {
  const { onValueChange, perPageLimit } = props;
  const limits = [
    [10, "элементов"],
    [20, "элементов"]
  ];
  let startIndex: number;

  const getOptionsOrder = () => {
    limits.find((item,index) => {
      if(item[0] === perPageLimit) {
        startIndex = index
      }
    });
    return [limits.splice(startIndex, 1)[0], ...limits];
  }

  const onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const select = evt.target as HTMLSelectElement;
    const value = select.options[select.selectedIndex].value;
    onValueChange(parseInt(value, 10));
  }

  const options = getOptionsOrder().map((item) => {
    return (
    <option key={ item[0] } className="limit__option" value={ item[0] }>
      { `${item[0]} ${item[1]}`}
    </option>
    );
  })

  return (
    <form className="limit">
      <label htmlFor="limit-select">Показывать по</label>
      <select name="limit__select" id="limit-select"
              onChange={ (evt) => onChange(evt) }>
        { options }
      </select>
    </form>
  );
}

export default Limit;
