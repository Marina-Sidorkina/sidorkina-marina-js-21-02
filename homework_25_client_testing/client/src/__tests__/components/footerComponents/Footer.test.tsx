import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Footer from '../../../components/footerComponents/footer/Footer';

configure({ adapter: new Adapter() });

describe('Footer component test', () => {
  test('should render Main', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.length).toEqual(1);
  });

  test('should render Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
