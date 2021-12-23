import '../../../mocks/matchMediaMock';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Registration from '../../pages/registration/Registration';
import mockStore from '../../../mocks/mockStore';
import initialStore from '../../../mocks/initialStore';

configure({ adapter: new Adapter() });

describe('Registration page test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore(initialStore);
    wrapper = mount(
      <Provider store={store}>
        <HashRouter>
          <Registration />
        </HashRouter>
      </Provider>
    );
  });

  test('should render Registration page', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render Registration page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
