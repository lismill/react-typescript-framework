/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 18:32:30
 * @LastEditTime: 2022-03-08 20:33:14
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LForm.tsx
 */
import React from "react";
import { Card, Form, Input, InputNumber, Button, Space } from "antd";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

export default function DevelopAntDLForm() {
  const [form] = Form.useForm();
  return (
    <Card title="Form 表单" className="m-b16">
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={(v) => console.log(v)}
        validateMessages={validateMessages}
      >
        <Form.Item name={["user", "name"]} label="Name" rules={[{ required: true }]}>
          <Input placeholder="placeholder" />
        </Form.Item>
        <Form.Item name={["user", "email"]} label="Email" rules={[{ type: "email" }]}>
          <Input placeholder="placeholder" />
        </Form.Item>
        <Form.Item name={["user", "age"]} label="Age" rules={[{ type: "number", min: 0, max: 99 }]}>
          <InputNumber placeholder="number" />
        </Form.Item>
        <Form.Item name={["user", "website"]} label="Website">
          <Input placeholder="placeholder" />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Introduction">
          <Input.TextArea placeholder="placeholder" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="default" htmlType="button" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
}
