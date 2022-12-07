import { Button, Form, Input, message } from "antd";
import "./Auth.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);

    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .post(url, values)
      .then(function (response) {
        message.success("You have successfully registered!");
        setTimeout(() => {
          form.resetFields();
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
      <h1 className="title">Register</h1>
      <Form
        form={form}
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
          <Input type="text" placeholder="Enter your full name..." />
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
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Enter your password..." />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Enter your password..." />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Register
        </Button>

        <p className="link-text">
          Already have an account? <NavLink to={"/login"}>Login</NavLink>
        </p>
      </Form>
      {/* <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        <Alert message="Success Tips" type="success" showIcon />
      </Space> */}
    </div>
  );
}
