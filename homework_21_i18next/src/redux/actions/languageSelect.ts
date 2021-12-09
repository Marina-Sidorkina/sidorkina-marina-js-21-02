import { CHANGE_LANGUAGE } from '../constants/languageSelect';

export const changeLanguageAction = (value: string) => ({
  type: CHANGE_LANGUAGE,
  payload: value
});
