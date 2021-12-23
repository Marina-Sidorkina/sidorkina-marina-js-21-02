import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Logo from '../../../components/headerComponents/logo/Logo';

configure({ adapter: new Adapter() });

describe('Logo component test', () => {
  test('should render Header', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.length).toEqual(1);
  });

  test('should render Logo', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
