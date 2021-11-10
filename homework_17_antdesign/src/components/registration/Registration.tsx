import React, {useContext, useEffect} from "react";
import "./Registration.scss";
import { Form, Input, Button } from "antd";
import { IRegistrationProps } from "../../@types/interfaces/components";
import { ThemeContext } from "../../contexts/ThemeContext";
import {createNewUser} from "../../utils/dummyApi";
import { addAndShowNewUser } from "../../api/dummyApi";
import { withRouter } from "react-router-dom";

const Registration = (props: IRegistrationProps) => {
  const { setShowNavItems, history } = props;
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    setShowNavItems(false);
  }, [setShowNavItems])

  const onFinish = (values: any) => {
    addAndShowNewUser(createNewUser(values), (id: string) => {
      history.push(`/user/${ id }`);
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
                 ]}><Input /></Form.Item>
      <Form.Item label="Last Name" name="lastName" required
                 rules={[
                   { required: true, message: "Please enter your last name" },
                   { min: 2, message: "Minimum length is 2" },
                   { max: 50, message: "Maximum length is 50" }
                 ]}><Input /></Form.Item>
      <Form.Item label="Email" name="email" required
                 rules={[
                   { required: true, message: "Please enter your email" },
                   {
                     pattern: /^[a-z0-9]+[a-z-_0-9]+[a-z0-9]+@[a-z]+\.[a-z]{3}$/,
                     message: "Format required: (letters and numbers separated by - or _)@(letters).(letters)"
                   }
                 ]}><Input /></Form.Item>
      <Form.Item label="Gender" name="gender"
                 rules={[
                   {
                     pattern: /^male|female|other$/,
                     message: "Required values: male, female, other"
                   }
                 ]}><Input /></Form.Item>
      <Form.Item label="Title" name="title"
                 rules={[
                   {
                     pattern: /^mr|ms|mrs|miss|dr$/,
                     message: "Required values: mr, ms, mrs, miss, dr"
                   }
                 ]}><Input /></Form.Item>
      <Form.Item label="Birth Date" name="dateOfBirth"
                 rules={[
                   {
                     pattern: /^(0[1-9]|1[012])[.](0[1-9]|[12][0-9]|3[01])[.]((19)\d\d)|((20)(0[1-9]|[1][0-9]|2[01]))$/,
                     message: "Format required: mm.dd.yyyy"
                   },
                   {
                     validator(rule, value) {
                       const today = new Date();
                       const dateArray = value.split(".").map((item: string) => parseInt(item, 10));
                       const check = new Date(dateArray[2], dateArray[0] - 1, dateArray[1]);
                       if(check > today) {
                         return Promise.reject("Invalid date")
                       }
                       return Promise.resolve();
                     }
                   }
                 ]}><Input /></Form.Item>
      <Form.Item label="Phone" name="phone"
                 rules={[
                   { min: 5, message: "Minimum length is 5" },
                 ]}><Input /></Form.Item>
      <Form.Item label="Country" name="country"><Input /></Form.Item>
      <Form.Item label="City" name="city"><Input /></Form.Item>
      <Form.Item label="Picture" name="picture"><Input /></Form.Item>
      <Form.Item className="registration__submit">
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(Registration);
