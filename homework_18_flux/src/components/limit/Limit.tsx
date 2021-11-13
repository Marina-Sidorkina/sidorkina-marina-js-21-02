import "./Limit.scss";
import { ILimitProps } from "../../@types/interfaces/components";
import limitStore from "../../stores/limit";
import React, { useEffect, useState } from "react";
import appStore from "../../stores/app";
import { updateCurrentPageAction, updatePerPageLimitAction } from "../../actions/app";

const Limit = (props: ILimitProps) => {
  const { perPageLimit } = props;
  const [options, setOptions] = useState([] as any);

  useEffect(() => {
    limitStore.updateLimits(perPageLimit);
    setOptions(limitStore.getLimits());
  }, [perPageLimit])

  const onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const select = evt.target as HTMLSelectElement;
    const value = select.options[select.selectedIndex].value;
    const newValue = parseInt(value, 10);
    const settings = appStore.getSettings();

    if(settings.currentPage > Math.ceil(settings.itemsAmount / newValue)) {
      updateCurrentPageAction(Math.ceil(settings.itemsAmount / newValue));
    }
    updatePerPageLimitAction(newValue);
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

export default Limit;
