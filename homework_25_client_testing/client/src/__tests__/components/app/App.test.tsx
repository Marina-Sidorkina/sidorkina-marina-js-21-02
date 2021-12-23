import '../../../../mocks/matchMediaMock';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../../../components/app/App';
import mockStore from '../../../../mocks/mockStore';
import initialStore from '../../../../mocks/initialStore';

configure({ adapter: new Adapter() });

describe('App component test', () => {
  const store = mockStore(initialStore);
  store.dispatch = jest.fn();

  test('should render App', () => {
    const wrapper = mount(<Provider store={store}><App /></Provider>);
    expect(wrapper.length).toEqual(1);
  });

  test('should render App', () => {
    const wrapper = mount(<Provider store={store}><App /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
