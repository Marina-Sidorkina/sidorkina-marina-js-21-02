import React, {SyntheticEvent, useContext } from "react";
import "./Paginator.scss";
import { IPaginatorProps } from "../../@types/interfaces/components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getPagesArray } from "../../utils/components";

const Paginator = (props: IPaginatorProps) => {
  const themeContext = useContext(ThemeContext);
  const { onCurrentChange, current, itemsAmount, perPageLimit } = props;

  const onChange = React.useCallback((evt: SyntheticEvent) => {
    const value = parseInt((evt.target as HTMLElement).innerText, 10);
    onCurrentChange(value);
  }, [onCurrentChange]);

  return (
    <ul className={ `paginator ${ themeContext.darkTheme ? "paginator_dark" : "" }` }>
      { itemsAmount ? getPagesArray(itemsAmount, current, perPageLimit)
        .map((item, index) => {
          if(item === 0) {
            return (
              <li key={ index } className="paginator__dots">...</li>
            );
          } else {
            return (
              <li className="paginator__item" key={ index } onClick={ onChange }>
                <a className={`paginator__link ${ current === item ?
                  "paginator__link_current" : ""}`}
                   href={ `#${ index + 1 }` }>{ item }</a>
              </li>
            );
          }
        }) : null}
    </ul>
  );
}

export default Paginator;
