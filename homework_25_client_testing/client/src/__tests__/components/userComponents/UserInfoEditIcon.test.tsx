import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import UserInfoEditIcon from '../../../components/userComponents/userInfoEditIcon/UserInfoEditIcon';

configure({ adapter: new Adapter() });

describe('UserInfoEditIcon component test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<UserInfoEditIcon />);
  });

  test('should render UserInfoEditIcon', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render UserInfoEditIcon', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
