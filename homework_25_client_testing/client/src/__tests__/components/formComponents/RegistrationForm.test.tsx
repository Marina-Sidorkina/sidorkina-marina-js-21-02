import '../../../../mocks/matchMediaMock';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import mockStore from '../../../../mocks/mockStore';
import RegistrationForm from '../../../components/formComponents/registrationForm/RegistrationForm';
import initialStore from '../../../../mocks/initialStore';

jest.mock('../../../redux/actions/registrationForm');
configure({ adapter: new Adapter() });

describe('RegistrationForm component test', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore(initialStore);
    store.dispatch = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        <HashRouter>
          <RegistrationForm />
        </HashRouter>
      </Provider>
    );
  });

  test('should render RegistrationForm', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('should render RegistrationForm', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
