import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockStore from '../../../../mocks/mockStore';
import LanguageSelect from '../../../components/footerComponents/languageSelect/LanguageSelect';
import * as actions from '../../../redux/actions/languageSelect';
import initialStore from '../../../../mocks/initialStore';

jest.mock('../../../redux/actions/languageSelect');
configure({ adapter: new Adapter() });

describe('LanguageSelect component test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore(initialStore);
    store.dispatch = jest.fn();
    wrapper = mount(<Provider store={store}><LanguageSelect /></Provider>);
  });

  test('should render LanguageSelect', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('prop should match with store', () => {
    expect(wrapper.prop('languageSelector')).toEqual(store.languageSelector);
  });

  test('should render LanguageSelect', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change value', () => {
    wrapper.childAt(0).simulate('change', { target: { value: 'en' } });
    expect(actions.changeLanguageAction).toBeCalledWith('en');
  });
});
