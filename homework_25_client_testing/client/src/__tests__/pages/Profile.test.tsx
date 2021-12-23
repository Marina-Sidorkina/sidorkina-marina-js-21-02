import '../../../mocks/matchMediaMock';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Profile from '../../pages/profile/Profile';
import mockStore from '../../../mocks/mockStore';
import initialStore from '../../../mocks/initialStore';

configure({ adapter: new Adapter() });

describe('Profile test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore(initialStore);
    wrapper = mount(
      <Provider store={store}>
        <HashRouter>
          <Profile />
        </HashRouter>
      </Provider>
    );
  });

  test('should render Profile', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render Profile', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
