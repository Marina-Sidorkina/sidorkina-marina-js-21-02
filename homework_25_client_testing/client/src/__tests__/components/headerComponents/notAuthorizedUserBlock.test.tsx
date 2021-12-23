import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import NotAuthorizedUserBlock from '../../../components/headerComponents/notAuthorizedUserBlock/NotAuthorizedUserBlock';

configure({ adapter: new Adapter() });

describe('NotAuthorizedUserBlock component test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<NotAuthorizedUserBlock />);
  });

  test('should render NotAuthorizedUserBlock', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render NotAuthorizedUserBlock', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
