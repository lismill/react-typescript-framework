/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-01 17:20:33
 * @LastEditTime: 2022-03-08 20:34:35
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LButton.tsx
 */
import React from "react";
import { Card, Space, Button, Divider } from "antd";

export default function DevelopAntDLButton() {
  return (
    <Card title="Button 按钮" className="m-b16">
      <Space>
        <Button type="primary">Button</Button>
        <Button type="ghost">Button</Button>
        <Button type="dashed">Button</Button>
        <Button type="link">Button</Button>
        <Button type="text">Button</Button>
        <Button type="default">Button</Button>
        <Button type="default" disabled>
          Button
        </Button>
        <Button type="default" loading>
          Button
        </Button>
      </Space>

      <Divider></Divider>

      <Space>
        <Button type="primary" danger>
          Button
        </Button>
        <Button type="ghost" danger>
          Button
        </Button>
        <Button type="dashed" danger>
          Button
        </Button>
        <Button type="link" danger>
          Button
        </Button>
        <Button type="text" danger>
          Button
        </Button>
        <Button type="default" danger>
          Button
        </Button>
        <Button type="default" danger disabled>
          Button
        </Button>
        <Button type="default" danger loading>
          Button
        </Button>
      </Space>
    </Card>
  );
}
