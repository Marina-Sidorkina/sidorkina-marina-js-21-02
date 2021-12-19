import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import Navigation from '../../../components/headerComponents/navigation/Navigation';

configure({ adapter: new Adapter() });

describe('Navigation component test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<HashRouter><Navigation /></HashRouter>);
  });

  test('should render Navigation', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render Navigation', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
