/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 20:45:31
 * @LastEditTime: 2022-03-08 20:29:23
 * @FilePath: \create-react-app-typescript\src\views\Login\index.tsx
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.scss";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="main">
        <h1 className="m-b24">登录管理系统</h1>
        <Form
          name="login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={(v) => {
            console.log(v);
            navigate("/");
          }}
        >
          <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button m-r10">
              Log in
            </Button>
            Or <a href="/">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
