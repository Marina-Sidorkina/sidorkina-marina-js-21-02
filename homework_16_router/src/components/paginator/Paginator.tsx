import React, {SyntheticEvent, useContext, useEffect, useRef} from "react";
import "./Paginator.scss";
import { IPaginatorProps } from "../../@types/interfaces/components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getPagesArray } from "../../utils/components";

interface IUseRef {
  current: JSX.Element[];
}

const Paginator = (props: IPaginatorProps) => {
  const themeContext = useContext(ThemeContext);
  const { onCurrentChange, current, itemsAmount, perPageLimit } = props;
  let elements = useRef([]) as IUseRef;

  const onChange = React.useCallback((evt: SyntheticEvent) => {
    const value = parseInt((evt.target as HTMLElement).innerText, 10);
    onCurrentChange(value);
  }, [onCurrentChange]);

  const getElements = React.useCallback(() => {
    const array = getPagesArray(itemsAmount, current, perPageLimit);
    return array.map((item, index) => {
      if(item === 0) {
        return (
          <div key={ index } className="paginator__dots">...</div>
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
    })
  }, [current, itemsAmount, onChange, perPageLimit]);

  useEffect(() => {
    elements.current = getElements();
  }, [getElements, current, itemsAmount, perPageLimit])


  return (
    <ul className={ `paginator ${ themeContext.darkTheme ? "paginator_dark" : "" }` }>
      { elements.current }
    </ul>
  );
}

export default Paginator;
