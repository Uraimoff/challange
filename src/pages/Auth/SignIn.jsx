import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import "./Auth.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";
export default function SignIn() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    localStorage.setItem("token", "qwe123");
    window.location.reload()
    console.log("Success:", values);

    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .post(url, values)
      .then(function (response) {
        message.success("You have successfully registered!");
        setTimeout(() => {
          form.resetFields();
          setInitialValue({ remember: false });
        }, 1000);
      })
      .catch(function (error) {
        message.error(error.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="sign-in auth">
      <h1 className="title">Login</h1>
      <Form
        form={form}
        layout="vertical"
        name="basic"
        labelCol={{
          span: 10,
        }}
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please, enter your email adress!",
            },
          ]}
        >
          <Input type="email" placeholder="Enter your email adress..." />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password placeholder="Enter your password..." />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 0,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Checkbox style={{ marginBottom: "20px" }}>Remember me</Checkbox>

        <Button type="primary" htmlType="submit">
          Login
        </Button>

        <p className="link-text">
          Have you not registered yet?{" "}
          <NavLink to={"/register"}>Register</NavLink>
        </p>
      </Form>
    </div>
  );
}
