import React, {SyntheticEvent, useContext} from "react";
import "./Paginator.scss";
import { IPaginatorProps } from "../../@types/interfaces/components";
import { ThemeContext } from "../../contexts/ThemeContext";

const Paginator = (props: IPaginatorProps) => {
  const themeContext = useContext(ThemeContext);

  const onCurrentChange = (evt: SyntheticEvent) => {
    const value = parseInt((evt.target as HTMLElement).innerText, 10);
    props.onCurrentChange(value);
  }

  const elements = [...Array(5)].map((_, index) => (
    <li className="paginator__item" key={ index } onClick={ onCurrentChange }>
      <a className={`paginator__link ${ props.current === index + 1 ?
        "paginator__link_current" : ""}`}
         href={ `#${ index + 1 }` }>{ index + 1 }</a>
    </li>
  ));

  return (
    <ul className={ `paginator ${ themeContext.darkTheme ? "paginator_dark" : "" }` }>
      { elements }
    </ul>
  );
}

export default Paginator;
