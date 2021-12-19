import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import NavigationPostsIcon from '../../../components/headerComponents/navigationPostsIcon/NavigationPostsIcon';

configure({ adapter: new Adapter() });

describe('NavigationPostsIcon component test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<NavigationPostsIcon dark />);
  });

  test('should render NavigationPostsIcon', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render NavigationPostsIcon', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
