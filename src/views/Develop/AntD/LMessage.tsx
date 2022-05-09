/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-02 11:29:16
 * @LastEditTime: 2022-03-08 20:32:57
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LMessage.tsx
 */
import React from "react";
import { Card, message, Button, Space } from "antd";

export default function DevelopAntDLMessage() {
  return (
    <Card title="Message 全局提示" className="m-b16">
      <Space>
        <Button type="primary" onClick={() => message.success("This is a success message")}>
          Success
        </Button>
        <Button danger onClick={() => message.error("This is an error message")}>
          Error
        </Button>
        <Button type="default" onClick={() => message.warning("This is a warning message")}>
          Warning
        </Button>
      </Space>
    </Card>
  );
}
