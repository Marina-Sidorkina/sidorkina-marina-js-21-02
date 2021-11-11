import React, {useContext, useEffect, useState} from "react";
import "./Registration.scss";
import { Form, Input, Button } from "antd";
import { IRegistrationProps } from "../../@types/interfaces/components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { createNewUser } from "../../utils/dummyApi";
import { addAndShowNewUser } from "../../api/dummyApi";
import { withRouter } from "react-router-dom";
import registrationStore from "../../stores/registration";
import registration from "../../stores/registration";

const Registration = (props: IRegistrationProps) => {
  const { setShowNavItems, history, setCurrentMenuItem } = props;
  const themeContext = useContext(ThemeContext);
  const [values, setValues] = useState(registrationStore.getValues());
  const [settings, setSettings] = useState(registration.getSettings())

  useEffect(() => {
    setShowNavItems(false);
    setCurrentMenuItem("registration");

    registrationStore.on("change", () => {
      setValues({...registrationStore.getValues()});
      setSettings({...registrationStore.getSettings()})
    });

  }, [setShowNavItems, setCurrentMenuItem])

  const onFinish = (values: any) => {
    addAndShowNewUser(createNewUser(values), (id: string) => {
      if(id) {
        history.push(`/user/${ id }`);
      }
    });
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
