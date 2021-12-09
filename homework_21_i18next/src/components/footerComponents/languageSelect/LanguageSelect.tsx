import React, { ChangeEvent } from 'react';
import './LanguageSelect.scss';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { changeLanguageAction } from '../../../redux/actions/languageSelect';

const LanguageSelect = () => {
  const value = useTypedSelector((state) => state.languageSelector.value);
  const dispatch = useDispatch();

  const onLanguageChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguageAction(evt.target.value));
  };

  return (
    <select
      name="language"
      id="language"
      value={value}
      onChange={(evt) => onLanguageChange(evt)}
    >
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSelect;
