import React, {useContext, useEffect, useState} from "react";
import "./Registration.scss";
import { Form, Input, Button } from "antd";
import { IRegistrationProps } from "../../@types/interfaces/components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { createNewUser } from "../../utils/dummyApi";
import { addAndShowNewUser } from "../../api/dummyApi";
import { withRouter } from "react-router-dom";

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
      <Form.Item label="First Name" name="firstName" required
                 rules={[
                   { required: true, message: "Please enter your first name" },
                   { min: 2, message: "Minimum length is 2" },
                   { max: 50, message: "Maximum length is 50" }
                 ]}>
        <Input value={ firstName }
               onChange={ (value) => setFirstName(value.target.value) }/>
      </Form.Item>
      <Form.Item label="Last Name" name="lastName" required
                 rules={[
                   { required: true, message: "Please enter your last name" },
                   { min: 2, message: "Minimum length is 2" },
                   { max: 50, message: "Maximum length is 50" }
                 ]}>
        <Input value={ lastName }
               onChange={ (value) => setLastName(value.target.value) }/>
      </Form.Item>
      <Form.Item label="Email" name="email" required
                 rules={[
                   { required: true, message: "Please enter your email" },
                   {
                     pattern: /^[a-z0-9]+[a-z-_0-9]+[a-z0-9]+@[a-z]+\.[a-z]{3}$/,
                     message: "Format required: (letters and numbers separated by - or _)@(letters).(letters)"
                   }
                 ]}>
        <Input value={ email }
               onChange={ (value) => setEmail(value.target.value) }/>
      </Form.Item>
      <Form.Item label="Gender" name="gender"
                 rules={[
                   {
                     pattern: /^male|female|other$/,
                     message: "Required values: male, female, other"
                   }
                 ]}>
        <Input value={ gender }
               onChange={ (value) => setGender(value.target.value) }/>
      </Form.Item>
      <Form.Item label="Title" name="title"
                 rules={[
                   {
                     pattern: /^mr|ms|mrs|miss|dr$/,
                     message: "Required values: mr, ms, mrs, miss, dr"
                   }
                 ]}>
        <Input value={ title }
               onChange={ (value) => setTitle(value.target.value) }/>
      </Form.Item>
      <Form.Item label="Birth Date" name="dateOfBirth"
                 rules={[
                   {
                     pattern: /^(0[1-9]|1[012])[.](0[1-9]|[12][0-9]|3[01])[.](19|20)\d\d$/,
                     message: "Format required: mm.dd.yyyy"
                   },
                   {
                     validator(rule, value) {
                       const today = new Date();
                       const dateArray = value ? value.split(".").map((item: string) => parseInt(item, 10)) : null;
                       const check = value ? new Date(dateArray[2], dateArray[0] - 1, dateArray[1]) : null;
                       if(check && check > today) {
                         return Promise.reject("Invalid date")
                       }
                       return Promise.resolve();
                     }
                   }
                 ]}>
        <Input value={ dateOfBirth }
               onChange={ (value) => setDateOfBirth(value.target.value) }/>
      </Form.Item>
      <Form.Item label="Phone" name="phone"
                 rules={[
                   { min: 5, message: "Minimum length is 5" },
                   { max: 20, message: "Maximum length is 20" }
                 ]}><Input /></Form.Item>
      <Form.Item label="Country" name="country">
        <Input value={ country }
               onChange={ (value) => setCountry(value.target.value) }/>
      </Form.Item>
      <Form.Item label="City" name="city">
        <Input value={ city }
               onChange={ (value) => setCity(value.target.value) }/>
      </Form.Item>
      <Form.Item label="Picture" name="picture">
        <Input value={ picture }
               onChange={ (value) => setPicture(value.target.value) }/>
      </Form.Item>
      <Form.Item className="registration__submit">
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(Registration);
