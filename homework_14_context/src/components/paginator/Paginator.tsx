import React, {SyntheticEvent} from "react";
import "./Paginator.css";
import { IPaginatorProps } from "../../@types/interfaces/components";

class Paginator extends React.Component<IPaginatorProps> {
  constructor(props: IPaginatorProps) {
    super(props);

    this.onCurrentChange = this.onCurrentChange.bind(this);
  }

  onCurrentChange(evt: SyntheticEvent) {
    const value = parseInt((evt.target as HTMLElement).innerText, 10);
    this.props.onCurrentChange(value);
  }

  render() {
    const elements = [...Array(5)].map((_, index) => (
      <li className="paginator__item" key={ index } onClick={ this.onCurrentChange }>
        <a className={`paginator__link ${ this.props.current === index + 1 ? 
                        "paginator__link_current" : ""}`}
           href="#">{ index + 1 }</a>
      </li>
    ));

    return (
      <ul className={ `paginator ${ this.props.className }` }>
        { elements }
      </ul>
    );
  }
}

export default Paginator;
