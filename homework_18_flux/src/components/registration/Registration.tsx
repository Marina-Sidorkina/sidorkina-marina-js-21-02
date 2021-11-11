import React, {useContext, useEffect, useState} from "react";
import "./Registration.scss";
import { Form, Input, Button } from "antd";
import { IRegistrationProps } from "../../@types/interfaces/components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { createNewUser } from "../../utils/dummyApi";
import { addAndShowNewUser } from "../../api/dummyApi";
import { withRouter } from "react-router-dom";
import { RULES, REGISTRATION_FORM_SETTINGS } from "../../constants/stores/registration";

const Registration = (props: IRegistrationProps) => {
  const { setShowNavItems, history, setCurrentMenuItem } = props;
  const themeContext = useContext(ThemeContext);
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ gender, setGender ] = useState("");
  const [ title, setTitle ] = useState("");
  const [ dateOfBirth, setDateOfBirth ] = useState("");
  const [ country, setCountry ] = useState("");
  const [ city, setCity ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ picture, setPicture ] = useState("");

  useEffect(() => {
    setShowNavItems(false);
    setCurrentMenuItem("registration");
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
      { Object.keys(REGISTRATION_FORM_SETTINGS).map((key) => {
        return (
          <Form.Item key={ REGISTRATION_FORM_SETTINGS[key].name }
                     label={ REGISTRATION_FORM_SETTINGS[key].label }
                     name={ REGISTRATION_FORM_SETTINGS[key].name }
                     required={ REGISTRATION_FORM_SETTINGS[key].required }
                     rules={ REGISTRATION_FORM_SETTINGS[key].rules }>
            <Input value={ eval(REGISTRATION_FORM_SETTINGS[key].name) }
                   onChange={ (value) => {
                     eval(REGISTRATION_FORM_SETTINGS[key].setter)(value.target.value);
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
