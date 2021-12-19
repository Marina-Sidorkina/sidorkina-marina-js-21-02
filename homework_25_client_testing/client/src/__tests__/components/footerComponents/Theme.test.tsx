import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Theme from '../../../components/footerComponents/theme/Theme';

configure({ adapter: new Adapter() });

describe('Theme component test', () => {
  test('should render Theme', () => {
    const wrapper = shallow(<Theme />);
    expect(wrapper.length).toEqual(1);
  });

  test('should render Theme', () => {
    const wrapper = shallow(<Theme />);
    expect(wrapper).toMatchSnapshot();
  });
});
