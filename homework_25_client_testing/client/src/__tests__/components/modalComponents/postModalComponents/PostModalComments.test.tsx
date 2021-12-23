import '../../../../../mocks/matchMediaMock';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import PostModalComments
  from '../../../../components/modalComponents/postModalComponents/postModalComments/PostModalComments';
import mockStore from '../../../../../mocks/mockStore';
import initialStore from '../../../../../mocks/initialStore';

configure({ adapter: new Adapter() });

describe('PostModalComments test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore(initialStore);
    wrapper = mount(
      <Provider store={store}>
        <HashRouter>
          <PostModalComments />
        </HashRouter>
      </Provider>
    );
  });

  test('should render PostModalComments', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render PostModalComments', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
