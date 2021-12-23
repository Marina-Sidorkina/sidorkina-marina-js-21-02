import '../../../mocks/matchMediaMock';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Login from '../../pages/login/Login';
import mockStore from '../../../mocks/mockStore';
import initialStore from '../../../mocks/initialStore';

configure({ adapter: new Adapter() });

describe('Login page test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore(initialStore);
    wrapper = mount(
      <Provider store={store}>
        <HashRouter>
          <Login />
        </HashRouter>
      </Provider>
    );
  });

  test('should render Login page', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render Login page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
