import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Header from '../../../components/headerComponents/header/Header';

configure({ adapter: new Adapter() });

describe('Header component test', () => {
  test('should render Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toEqual(1);
  });

  test('should render Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
