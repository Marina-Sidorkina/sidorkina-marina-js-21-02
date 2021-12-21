import produce from 'immer';
import i18next from 'i18next';
import { IChangeLanguageActionType } from '../@types/actions';
import { CHANGE_LANGUAGE } from '../constants/languageSelect';

interface ILanguageSelectorInitialState {
  value: string;
}

const initialState = {
  value: 'ru'
};

const updateValue = (draft: ILanguageSelectorInitialState, value: string) => {
  draft.value = value;
  i18next.changeLanguage(value);
  return draft;
};

const languageSelectorReducer = (
  state = initialState,
  action: IChangeLanguageActionType
) => (
  produce(state,
    (draft: ILanguageSelectorInitialState) => {
      switch (action.type) {
        case CHANGE_LANGUAGE:
          return updateValue(draft, action.payload);
        default:
          return state;
      }
    })
);

export default languageSelectorReducer;
