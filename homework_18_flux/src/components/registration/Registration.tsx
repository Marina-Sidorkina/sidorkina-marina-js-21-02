import React, {useContext, useEffect, useRef, useState} from "react";
import "./Registration.scss";
import { Form, Input, Button } from "antd";
import { IRegistrationProps } from "../../@types/interfaces/components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { withRouter } from "react-router-dom";
import registrationStore from "../../stores/registration";
import registration from "../../stores/registration";
import { sendFormAndShowUserAction } from "../../actions/registration";
import { updateCurrentMenuItemAction, updateShowNavItemsAction } from "../../actions/app";

const Registration = (props: IRegistrationProps) => {
  const { history } = props;
  const themeContext = useContext(ThemeContext);
  const [values, setValues] = useState(registrationStore.getValues());
  const [settings, setSettings] = useState(registration.getSettings());
  const isUnmounted = useRef(false);

  useEffect(() => {
    isUnmounted.current = false;
    updateShowNavItemsAction(false);
    updateCurrentMenuItemAction("registration");

    registrationStore.on("change", () => {
      setValues({...registrationStore.getValues()});
      setSettings({...registrationStore.getSettings()})
    });

    return () => {
      isUnmounted.current = true;
      registrationStore.removeAllListeners("change");
    };

  }, [])

  const onFinish = (values: any) => {
    sendFormAndShowUserAction(values, history);
  };

  return (
    <Form className={`registration ${ themeContext.darkTheme ? "registration_dark" : "" }`}
          onFinish={ onFinish }>
      { Object.keys(registrationStore.getSettings()).map((key) => {
        return (
          <Form.Item key={ settings[key].name }
                     label={ settings[key].label }
                     name={ settings[key].name }
                     required={ settings[key].required }
                     rules={ settings[key].rules }>
            <Input value={ values[key] }
                   onChange={ (value) => {
                     settings[key].action(value.target.value);
                   } }/>
          </Form.Item>
        )
      }) }
      <Form.Item className="registration__submit">
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(Registration);
