import React, {SyntheticEvent} from "react";
import "./Paginator.css";
import { IPaginatorProps } from "../../@types/interfaces/components";

const Paginator = (props: IPaginatorProps) => {
  const onCurrentChange = (evt: SyntheticEvent) => {
    const value = parseInt((evt.target as HTMLElement).innerText, 10);
    props.onCurrentChange(value);
  }

  const elements = [...Array(5)].map((_, index) => (
    <li className="paginator__item" key={ index } onClick={ onCurrentChange }>
      <a className={`paginator__link ${ props.current === index + 1 ?
        "paginator__link_current" : ""}`}
         href="#">{ index + 1 }</a>
    </li>
  ));

  return (
    <ul className={ `paginator ${ props.className }` }>
      { elements }
    </ul>
  );
}

export default Paginator;
