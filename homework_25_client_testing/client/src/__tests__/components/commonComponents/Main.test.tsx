import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Main from '../../../components/commonComponents/main/Main';

configure({ adapter: new Adapter() });

describe('Main component test', () => {
  test('should render Main', () => {
    const wrapper = shallow(<Main>{}</Main>);
    expect(wrapper.length).toEqual(1);
  });

  test('should render children', () => {
    const wrapper = shallow(<Main><div className="children">Children</div></Main>);
    expect(wrapper.find('div.children').text()).toBe('Children');
  });

  test('should render Main', () => {
    const wrapper = shallow(<Main><div className="children">Children</div></Main>);
    expect(wrapper).toMatchSnapshot();
  });
});
