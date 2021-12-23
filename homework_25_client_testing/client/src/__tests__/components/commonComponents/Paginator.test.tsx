import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Paginator from '../../../components/commonComponents/paginator/Paginator';

configure({ adapter: new Adapter() });

describe('Paginator component test', () => {
  test('should render Paginator', () => {
    const wrapper = shallow(<Paginator
      perPage={5}
      onPageChange={() => {}}
      current={0}
      total={10}
    />);
    expect(wrapper.length).toEqual(1);
  });

  test('should render Paginator', () => {
    const wrapper = shallow(<Paginator
      perPage={5}
      onPageChange={() => {}}
      current={0}
      total={10}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
