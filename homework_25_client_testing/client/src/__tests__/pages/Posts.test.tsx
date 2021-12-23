import '../../../mocks/matchMediaMock';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Posts from '../../pages/posts/Posts';
import mockStore from '../../../mocks/mockStore';
import initialStore from '../../../mocks/initialStore';

configure({ adapter: new Adapter() });

describe('Posts test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore(initialStore);
    wrapper = mount(
      <Provider store={store}>
        <HashRouter>
          <Posts />
        </HashRouter>
      </Provider>
    );
  });

  test('should render Posts', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render Posts', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
