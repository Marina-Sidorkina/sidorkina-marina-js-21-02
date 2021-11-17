import React, { useContext, useEffect } from 'react';
import './Registration.scss';
import { Form, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { REGISTRATION_SETTINGS } from '../../redux/settings/registration';
import { ThemeContext } from '../../contexts/ThemeContext';
import {
  updateCityAction,
  updateCountryAction,
  updateDateOfBirthAction,
  updateEmailAction,
  updateFirstNameAction,
  updateGenderAction,
  updateLastNameAction, updatePhoneAction, updatePictureAction, updateTitleAction
} from '../../redux/actions/registration';
import { addAndShowNewUser } from '../../api/dummyApi';
import { createNewUser } from '../../utils/dummyApi';
import { updateShowNavItemsAction, updateCurrentMenuItemAction } from '../../redux/actions/app';

interface IRegistrationProps {
  actions: any;
  updateShowNavItems: Function;
  updateCurrentMenuItem: Function;
  values: any;
  history: any;
}

const Registration = (props: IRegistrationProps) => {
  const {
    history, values, actions, updateShowNavItems, updateCurrentMenuItem
  } = props;
  const settings: any = REGISTRATION_SETTINGS.formItems;
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    updateShowNavItems(false);
    updateCurrentMenuItem('registration');
  }, [updateShowNavItems, updateCurrentMenuItem]);

  const onFinish = (data: any) => {
    addAndShowNewUser(createNewUser(data))
      .then((response) => {
        if (response.id) {
          history.push(`/user/${response.id}`);
        }
      });
  };

  return (
    <Form
      className={`registration ${themeContext.darkTheme ? 'registration_dark' : ''}`}
      onFinish={onFinish}
    >
      { Object.keys(settings).map((key: any) => (
        <Form.Item
          key={settings[key].name}
          label={settings[key].label}
          name={settings[key].name}
          required={settings[key].required}
          rules={settings[key].rules}
        >
          <Input
            value={values[key]}
            onChange={(value) => {
              actions[key](value.target.value);
            }}
          />
        </Form.Item>
      )) }
      <Form.Item className="registration__submit">
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
  );
};
export default withRouter(connect(
  (state: any) => ({
    values: state.registration.values,
  }),
  (dispatch) => ({
    actions: {
      firstName: bindActionCreators(updateFirstNameAction, dispatch),
      lastName: bindActionCreators(updateLastNameAction, dispatch),
      email: bindActionCreators(updateEmailAction, dispatch),
      gender: bindActionCreators(updateGenderAction, dispatch),
      title: bindActionCreators(updateTitleAction, dispatch),
      dateOfBirth: bindActionCreators(updateDateOfBirthAction, dispatch),
      phone: bindActionCreators(updatePhoneAction, dispatch),
      country: bindActionCreators(updateCountryAction, dispatch),
      city: bindActionCreators(updateCityAction, dispatch),
      picture: bindActionCreators(updatePictureAction, dispatch),
    },
    updateShowNavItems: bindActionCreators(updateShowNavItemsAction, dispatch),
    updateCurrentMenuItem: bindActionCreators(updateCurrentMenuItemAction, dispatch)
  }),
)(Registration));
