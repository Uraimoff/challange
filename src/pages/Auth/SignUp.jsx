import React from "react";
import { Button,  Form, Input } from "antd";
import "./Auth.scss";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="sign-in auth">
      <h1 className="title">Register</h1>
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
          label="Full name"
          name="full name"
          rules={[
            {
              required: true,
              message: "Please, enter your full name",
            },
          ]}
        >
          <Input type="email" placeholder="Enter your full name..." />
        </Form.Item>
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
          label="Repeat password"
          name="repeat password"
          rules={[
            {
              required: true,
              message: "Please enter your repeat password",
            },
          ]}
        >
          <Input.Password placeholder="Enter your repeat password..." />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Register
        </Button>

        <p className="link-text">
        Already have an account?{" "}
          <NavLink to={"/login"}>Login</NavLink>
        </p>
      </Form>
    </div>
  );
}
