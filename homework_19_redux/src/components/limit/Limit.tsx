import "./Limit.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCurrentPageAction, updatePerPageLimitAction } from "../../redux/actions/app";
import { updateLimitsAction } from "../../redux/actions/limit";


const Limit = (props: any) => {
  const { itemsAmount, currentPage, limits,
  updateCurrentPage, updatePerPageLimit, updateLimits } = props;
  const [options, setOptions] = useState(limits);

  useEffect(() => {
    setOptions(limits);
  }, [limits])

  const onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const select = evt.target as HTMLSelectElement;
    const value = select.options[select.selectedIndex].value;
    const newValue = parseInt(value, 10);

    if(currentPage > Math.ceil(itemsAmount / newValue)) {
      updateCurrentPage(Math.ceil(itemsAmount / newValue));
    }
    updateLimits(newValue);
    updatePerPageLimit(newValue);
  }

  return (
    <form className="limit">
      <label htmlFor="limit-select">Elements Per Page</label>
      <select name="limit__select" id="limit-select"
              onChange={ (evt) => onChange(evt) }>
        {
          options.map((item: (string | number)[]) => {
            return (
              <option key={ item[0] } className="limit__option" value={ item[0] }>
                { `${item[0]} ${item[1]}`}
              </option>
            );
          })
        }
      </select>
    </form>
  );
}

export default connect(
  (state: any) => ({
    itemsAmount: state.app.settings.itemsAmount,
    currentPage: state.app.settings.currentPage,
    limits: state.limit.limits
  }),
  (dispatch) => ({
    updateCurrentPage: bindActionCreators(updateCurrentPageAction, dispatch),
    updatePerPageLimit: bindActionCreators(updatePerPageLimitAction, dispatch),
    updateLimits: bindActionCreators(updateLimitsAction, dispatch)
  })
)(Limit);
