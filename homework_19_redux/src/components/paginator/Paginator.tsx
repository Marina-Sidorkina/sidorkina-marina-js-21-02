import React, {SyntheticEvent, useContext } from "react";
import "./Paginator.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getPagesArray } from "../../utils/components";
import { connect } from "react-redux";
import { updateCurrentPageAction } from "../../redux/actions/app";
import { bindActionCreators } from "redux";

const Paginator = (props: any) => {
  const themeContext = useContext(ThemeContext);
  const { updateCurrentPage, itemsAmount, currentPage, perPageLimit } = props;

  const onChange = React.useCallback((evt: SyntheticEvent) => {
    const value = parseInt((evt.target as HTMLElement).innerText, 10);
    updateCurrentPage(value);
  }, [updateCurrentPage]);

  return (
    <ul className={ `paginator ${ themeContext.darkTheme ? "paginator_dark" : "" }` }>
      { itemsAmount ? getPagesArray(itemsAmount, currentPage, perPageLimit)
        .map((item, index) => {
          if(item === 0) {
            return (
              <li key={ index } className="paginator__dots">...</li>
            );
          } else {
            return (
              <li className="paginator__item" key={ index } onClick={ onChange }>
                <a className={`paginator__link ${ currentPage === item ?
                  "paginator__link_current" : ""}`}
                   href={ `#${ index + 1 }` }>{ item }</a>
              </li>
            );
          }
        }) : null}
    </ul>
  );
}

export default connect(
  (state: any) => ({
    itemsAmount: state.app.settings.itemsAmount,
    currentPage: state.app.settings.currentPage,
    perPageLimit: state.app.settings.perPageLimit
  }),
  (dispatch) => ({
    updateCurrentPage: bindActionCreators(updateCurrentPageAction, dispatch),
  })
)(Paginator);
