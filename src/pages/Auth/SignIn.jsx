import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./Auth.scss";
import { NavLink } from "react-router-dom";
export default function SignIn() {
  const onFinish = (values) => {
    localStorage.setItem("token", "qwe123");
    window.location.reload()
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="sign-in auth">
      <h1 className="title">Login</h1>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 10,
        }}
        initialValues={{
          remember: false,
        }}
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
