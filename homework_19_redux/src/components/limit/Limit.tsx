import "./Limit.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCurrentPageAction, updatePerPageLimitAction } from "../../redux/actions/app";
import { updateLimitsAction } from "../../redux/actions/limit";


const Limit = (props: any) => {
  const [options, setOptions] = useState([] as any);

  useEffect(() => {
    props.updateLimits(props.perPageLimit);
    setOptions(props.limits);
  }, [props.perPageLimit])

  const onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const select = evt.target as HTMLSelectElement;
    const value = select.options[select.selectedIndex].value;
    const newValue = parseInt(value, 10);

    if(props.currentPage > Math.ceil(props.itemsAmount / newValue)) {
      props.updateCurrentPage(Math.ceil(props.itemsAmount / newValue));
    }
    props.updatePerPageLimit(newValue);
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
    perPageLimit: state.app.settings.perPageLimit,
    limits: state.limit.limits
  }),
  (dispatch) => ({
    updateCurrentPage: bindActionCreators(updateCurrentPageAction, dispatch),
    updatePerPageLimit: bindActionCreators(updatePerPageLimitAction, dispatch),
    updateLimits: bindActionCreators(updateLimitsAction, dispatch)
  })
)(Limit);
