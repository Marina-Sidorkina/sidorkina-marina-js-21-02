import React from "react";
import "./Limit.css";
import { ILimitProps } from "../../@types/interfaces/components";

class Limit extends React.Component<ILimitProps> {
  constructor(props: ILimitProps) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const select = evt.target as HTMLSelectElement;
    const value = select.options[select.selectedIndex].value;
    this.props.onValueChange(parseInt(value, 10));
  }

  render() {
    return (
      <form className="limit">
        <label htmlFor="limit-select">Set items per page</label>
        <select name="limit__select" id="limit-select"
                onChange={ (evt) => this.onValueChange(evt) }>
          <option className="limit__option" value="10">10 items</option>
          <option className="limit__option" value="20">20 items</option>
        </select>
      </form>
    );
  }
}

export default Limit;
