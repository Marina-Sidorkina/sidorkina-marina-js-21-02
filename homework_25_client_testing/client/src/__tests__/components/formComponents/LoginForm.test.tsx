import '../../../../mocks/matchMediaMock';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import mockStore from '../../../../mocks/mockStore';
import LoginForm from '../../../components/formComponents/loginForm/LoginForm';
import initialStore from '../../../../mocks/initialStore';

jest.mock('../../../redux/actions/login');
configure({ adapter: new Adapter() });

describe('LoginForm component test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore(initialStore);
    store.dispatch = jest.fn();
    wrapper = mount(<Provider store={store}><HashRouter><LoginForm /></HashRouter></Provider>);
  });

  test('should render LoginForm', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render LoginForm', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
