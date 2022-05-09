/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-03-03 09:26:38
 * @LastEditTime: 2022-03-08 20:35:37
 * @FilePath: \create-react-app-typescript\src\views\Develop\AntD\LBadge.tsx
 */
import React from "react";
import { Card, Space, Badge, Avatar } from "antd";
import { NotificationOutlined, ClockCircleOutlined } from "@ant-design/icons";

export default function DevelopAntDLBadge() {
  return (
    <Card title="Badge 徽标数" className="m-b16">
      <Space size={16}>
        <Badge count={5}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={0} showZero>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge dot>
          <NotificationOutlined style={{ fontSize: 16 }} />
        </Badge>
        <Badge dot>
          <a href="#/develop/antd">Link something</a>
        </Badge>
        <Badge status="success" text="Success" />
        <Badge status="error" text="Error" />
        <Badge status="default" text="Default" />
        <Badge status="processing" text="Processing" />
        <Badge status="warning" text="Warning" />
      </Space>
    </Card>
  );
}
