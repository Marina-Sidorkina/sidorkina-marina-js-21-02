import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import mockStore from '../../../../mocks/mockStore';
import Authorization from '../../../components/headerComponents/authorization/Authorization';

configure({ adapter: new Adapter() });

describe('Authorization component test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore({
      login: {
        data: {
          authorizedUserId: '123345'
        }
      }
    });
    store.dispatch = jest.fn();
    wrapper = mount(<Provider store={store}><HashRouter><Authorization /></HashRouter></Provider>);
  });

  test('should render Authorization', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('prop should match with store', () => {
    expect(wrapper.prop('login')).toEqual(store.login);
  });

  test('should render LanguageSelect', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
