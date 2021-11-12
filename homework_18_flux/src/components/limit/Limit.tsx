import "./Limit.scss";
import { ILimitProps } from "../../@types/interfaces/components";
import {updateCurrentPageAction, updatePerPageLimitAction} from "../../actions/app";
import appStore from "../../stores/app";

const Limit = (props: ILimitProps) => {
  const { perPageLimit } = props;

  const limits = [
    [10, "elements"],
    [20, "elements"],
    [5, "elements"]
  ];
  let startIndex: number;

  const getOptionsOrder = () => {
    limits.forEach((item,index) => {
      if(item[0] === perPageLimit) {
        startIndex = index
      }
    });
    return [limits.splice(startIndex, 1)[0], ...limits];
  }

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

  const options = getOptionsOrder().map((item) => {
    return (
    <option key={ item[0] } className="limit__option" value={ item[0] }>
      { `${item[0]} ${item[1]}`}
    </option>
    );
  })

  return (
    <form className="limit">
      <label htmlFor="limit-select">Elements Per Page</label>
      <select name="limit__select" id="limit-select"
              onChange={ (evt) => onChange(evt) }>
        { options }
      </select>
    </form>
  );
}

export default Limit;
