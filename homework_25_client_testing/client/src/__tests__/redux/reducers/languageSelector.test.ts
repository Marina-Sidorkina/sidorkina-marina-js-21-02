import languageSelectorReducer from '../../../redux/reducers/languageSelector';
import { CHANGE_LANGUAGE } from '../../../redux/constants/languageSelect';
import '../../../../configs/i18nextTesingConfig';

const initialState = {
  value: 'ru'
};

describe('languageSelectorReducer test', () => {
  test('CHANGE_LANGUAGE', () => {
    expect(languageSelectorReducer(initialState, { type: CHANGE_LANGUAGE, payload: 'en' }))
      .toEqual({
        ...initialState,
        value: 'en'
      });
  });

  test('UNKNOWN ACTION', () => {
    expect(languageSelectorReducer(initialState, { type: 'UNKNOWN', payload: 'en' })).toEqual(initialState);
  });
});
